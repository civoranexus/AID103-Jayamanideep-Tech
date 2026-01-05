import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Treatment } from '@/types';
import { Leaf, Droplet, Sprout, Shield, DollarSign, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const getTypeIcon = () => {
    switch (treatment.type) {
      case 'chemical':
        return <Droplet className="h-5 w-5" />;
      case 'organic':
        return <Leaf className="h-5 w-5" />;
      case 'cultural':
        return <Sprout className="h-5 w-5" />;
      case 'preventive':
        return <Shield className="h-5 w-5" />;
    }
  };

  const getTypeColor = () => {
    switch (treatment.type) {
      case 'chemical':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'organic':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'cultural':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'preventive':
        return 'text-orange-600 bg-orange-50 border-orange-200';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn('p-2 rounded-lg border', getTypeColor())}>
              {getTypeIcon()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className="text-lg font-semibold">{treatment.name}</CardTitle>
              </div>
              <Badge variant="outline" className="capitalize">
                {treatment.type} Treatment
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-civora-blue mb-1">
              {treatment.effectiveness.toFixed(0)}%
            </div>
            <p className="text-xs text-muted-foreground">Effectiveness</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {treatment.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-semibold text-sm text-civora-blue mb-2">Application Method</h4>
            <p className="text-sm">{treatment.application}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-semibold text-sm text-civora-blue mb-2">Dosage & Timing</h4>
            <p className="text-sm mb-2"><strong>Dosage:</strong> {treatment.dosage}</p>
            <p className="text-sm"><strong>Timing:</strong> {treatment.timing}</p>
          </div>

          {treatment.precautions.length > 0 && (
            <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <h4 className="font-semibold text-sm text-orange-600">Safety Precautions</h4>
              </div>
              <ul className="space-y-1">
                {treatment.precautions.map((precaution, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span className="text-gray-700">{precaution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Cost:</span>
              <Badge
                variant={treatment.cost === 'high' ? 'destructive' : treatment.cost === 'medium' ? 'secondary' : 'outline'}
                className="capitalize"
              >
                {treatment.cost}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
