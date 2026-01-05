import { useParams, useNavigate } from 'react-router-dom';
import { useFarmStore } from '@/stores/farmStore';
import { Button } from '@/components/ui/button';
import AnalysisResult from '@/components/features/disease-detection/AnalysisResult';
import TreatmentCard from '@/components/features/disease-detection/TreatmentCard';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Treatment } from '@/types';
import { useToast } from '@/hooks/use-toast';

export default function Analysis() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { analyses } = useFarmStore();

  const analysis = analyses.find((a) => a.id === id);

  // Get treatments from session storage
  const treatments: Treatment[] = id
    ? JSON.parse(sessionStorage.getItem(`treatments-${id}`) || '[]')
    : [];

  if (!analysis) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-civora-blue mb-4">Analysis Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The requested analysis could not be found.
        </p>
        <Button onClick={() => navigate('/scan')}>Scan New Crop</Button>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: 'Report generation started',
      description: 'Your detailed analysis report will be downloaded shortly.',
    });
  };

  const handleShare = () => {
    toast({
      title: 'Share functionality',
      description: 'Report sharing will be available soon.',
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Analysis Results */}
      <AnalysisResult analysis={analysis} />

      {/* Treatment Recommendations */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-civora-blue">
              AI-Recommended Treatment Plans
            </h2>
            <p className="text-muted-foreground">
              Personalized recommendations based on disease analysis and farm conditions
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">{treatments.length} Options</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-6 border-t">
        <Button onClick={() => navigate('/scan')} className="flex-1">
          Scan Another Crop
        </Button>
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          View All Analyses
        </Button>
      </div>
    </div>
  );
}
