import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DiseaseAnalysis } from '@/types';
import { AlertTriangle, Activity, Droplets, Thermometer, CloudRain } from 'lucide-react';
import { cn, getSeverityBadgeClass } from '@/lib/utils';

interface AnalysisResultProps {
  analysis: DiseaseAnalysis;
}

export default function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Disease Identification Card */}
      <Card className="border-l-4 border-l-civora-blue">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-civora-blue mb-2">
                {analysis.diseaseName}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Detected in {analysis.cropType} at {analysis.growthStage} stage
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-civora-blue mb-1">
                {analysis.confidence.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Confidence</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={cn('p-3 rounded-lg border-l-4', getSeverityBadgeClass(analysis.severity))}>
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-xs font-medium">Severity</span>
              </div>
              <p className="text-lg font-bold capitalize">{analysis.severity}</p>
            </div>
            <div className="p-3 rounded-lg border-l-4 border-l-orange-500 bg-orange-50">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-medium text-orange-600">Affected Area</span>
              </div>
              <p className="text-lg font-bold text-orange-600">{analysis.affectedArea.toFixed(1)}%</p>
            </div>
            <div className={cn(
              'p-3 rounded-lg border-l-4',
              analysis.spreadRisk === 'high' ? 'border-l-red-500 bg-red-50' :
              analysis.spreadRisk === 'medium' ? 'border-l-yellow-500 bg-yellow-50' :
              'border-l-green-500 bg-green-50'
            )}>
              <div className="flex items-center gap-2 mb-1">
                <Droplets className={cn(
                  'h-4 w-4',
                  analysis.spreadRisk === 'high' ? 'text-red-600' :
                  analysis.spreadRisk === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                )} />
                <span className={cn(
                  'text-xs font-medium',
                  analysis.spreadRisk === 'high' ? 'text-red-600' :
                  analysis.spreadRisk === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                )}>Spread Risk</span>
              </div>
              <p className={cn(
                'text-lg font-bold capitalize',
                analysis.spreadRisk === 'high' ? 'text-red-600' :
                analysis.spreadRisk === 'medium' ? 'text-yellow-600' :
                'text-green-600'
              )}>{analysis.spreadRisk}</p>
            </div>
            <div className="p-3 rounded-lg border-l-4 border-l-civora-lightblue bg-blue-50">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="h-4 w-4 text-civora-blue" />
                <span className="text-xs font-medium text-civora-blue">Growth Stage</span>
              </div>
              <p className="text-lg font-bold text-civora-blue">{analysis.growthStage}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Causative Agent & Symptoms */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Disease Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-civora-blue mb-2">Causative Agent</h4>
            <p className="text-sm text-foreground bg-gray-50 p-3 rounded-lg">
              {analysis.causativeAgent}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-civora-blue mb-2">
              Identified Symptoms ({analysis.symptoms.length})
            </h4>
            <ul className="space-y-2">
              {analysis.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-civora-blue mt-1">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Factors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Environmental Conditions</CardTitle>
          <p className="text-sm text-muted-foreground">
            Current field conditions influencing disease development
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-civora-subtle rounded-lg">
              <Thermometer className="h-8 w-8 text-civora-blue" />
              <div>
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="text-xl font-bold text-civora-blue">
                  {analysis.environmentalFactors.temperature.toFixed(1)}°C
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-civora-subtle rounded-lg">
              <Droplets className="h-8 w-8 text-civora-blue" />
              <div>
                <p className="text-xs text-muted-foreground">Humidity</p>
                <p className="text-xl font-bold text-civora-blue">
                  {analysis.environmentalFactors.humidity.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-civora-subtle rounded-lg">
              <CloudRain className="h-8 w-8 text-civora-blue" />
              <div>
                <p className="text-xs text-muted-foreground">Rainfall</p>
                <p className="text-xl font-bold text-civora-blue">
                  {analysis.environmentalFactors.rainfall}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
