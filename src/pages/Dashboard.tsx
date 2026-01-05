import { useFarmStore } from '@/stores/farmStore';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from '@/components/features/dashboard/StatsCard';
import AlertCard from '@/components/features/dashboard/AlertCard';
import TrendChart from '@/components/features/dashboard/TrendChart';
import { Activity, AlertTriangle, CheckCircle, TrendingDown, Scan } from 'lucide-react';
import { formatDateTime, getSeverityBadgeClass, cn } from '@/lib/utils';
import { TrendData, Alert } from '@/types';

export default function Dashboard() {
  const navigate = useNavigate();
  const { analyses, farmProfile } = useFarmStore();

  // Generate mock alerts based on recent high-severity analyses
  const mockAlerts: Alert[] = analyses
    .filter((a) => a.severity === 'high' || a.severity === 'critical')
    .slice(0, 3)
    .map((analysis, index) => ({
      id: `alert-${analysis.id}`,
      timestamp: analysis.timestamp,
      priority: analysis.severity === 'critical' ? 'critical' : 'high',
      title: `${analysis.severity === 'critical' ? 'Critical' : 'High'} Disease Outbreak Detected`,
      description: `${analysis.diseaseName} detected in ${analysis.cropType} with ${analysis.affectedArea.toFixed(1)}% affected area`,
      location: farmProfile?.location || 'Your Farm',
      diseaseType: analysis.diseaseName,
      affectedCrops: [analysis.cropType],
      actionRequired: 'Immediate treatment recommended',
      status: index === 0 ? 'active' : index === 1 ? 'monitoring' : 'active',
    }));

  // Generate trend data for the past 30 days
  const generateTrendData = (): TrendData[] => {
    const data: TrendData[] = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        detections: Math.floor(Math.random() * 5),
        severityCritical: Math.floor(Math.random() * 2),
        severityHigh: Math.floor(Math.random() * 3),
        severityMedium: Math.floor(Math.random() * 4),
        severityLow: Math.floor(Math.random() * 3),
      });
    }
    return data;
  };

  const trendData = generateTrendData();

  const criticalCount = analyses.filter((a) => a.severity === 'critical').length;
  const highCount = analyses.filter((a) => a.severity === 'high').length;
  const healthyScans = analyses.filter((a) => a.severity === 'low').length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-civora-blue mb-2">Farm Health Dashboard</h1>
          <p className="text-muted-foreground">
            {farmProfile ? `${farmProfile.farmName} - ${farmProfile.location}` : 'Monitor crop health and disease trends'}
          </p>
        </div>
        <Button onClick={() => navigate('/scan')}>
          <Scan className="h-4 w-4 mr-2" />
          New Scan
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Analyses"
          value={analyses.length}
          subtitle="Disease scans performed"
          icon={Activity}
          variant="default"
        />
        <StatsCard
          title="Critical Issues"
          value={criticalCount}
          subtitle="Require immediate action"
          icon={AlertTriangle}
          variant="danger"
        />
        <StatsCard
          title="Active Monitoring"
          value={highCount}
          subtitle="High severity detections"
          icon={TrendingDown}
          variant="warning"
        />
        <StatsCard
          title="Healthy Scans"
          value={healthyScans}
          subtitle="Low risk assessments"
          icon={CheckCircle}
          variant="success"
        />
      </div>

      {/* Alerts Section */}
      {mockAlerts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-civora-blue">Active Alerts</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {mockAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                alert={alert}
                onClick={() => {
                  const analysisId = alert.id.replace('alert-', '');
                  navigate(`/analysis/${analysisId}`);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Trend Chart */}
      <TrendChart data={trendData} />

      {/* Recent Analyses */}
      {analyses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Disease Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analyses.slice(0, 5).map((analysis) => (
                <div
                  key={analysis.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/analysis/${analysis.id}`)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={analysis.imageUrl}
                      alt="Crop scan"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-civora-blue mb-1">
                        {analysis.diseaseName}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{analysis.cropType}</span>
                        <span>•</span>
                        <span>{formatDateTime(analysis.timestamp)}</span>
                        <span>•</span>
                        <span>{analysis.confidence.toFixed(1)}% confidence</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-medium capitalize',
                        getSeverityBadgeClass(analysis.severity)
                      )}
                    >
                      {analysis.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {analyses.length === 0 && (
        <Card className="p-12 text-center">
          <Scan className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Analyses Yet</h3>
          <p className="text-muted-foreground mb-6">
            Start scanning your crops to get AI-powered disease detection and treatment recommendations
          </p>
          <Button onClick={() => navigate('/scan')}>
            <Scan className="h-4 w-4 mr-2" />
            Scan Your First Crop
          </Button>
        </Card>
      )}
    </div>
  );
}
