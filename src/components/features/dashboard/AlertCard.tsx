import { Card, CardContent } from '@/components/ui/card';
import { Alert } from '@/types';
import { AlertTriangle, Info, Clock } from 'lucide-react';
import { cn, formatDateTime, getSeverityBadgeClass } from '@/lib/utils';

interface AlertCardProps {
  alert: Alert;
  onClick?: () => void;
}

export default function AlertCard({ alert, onClick }: AlertCardProps) {
  const getIcon = () => {
    switch (alert.priority) {
      case 'critical':
      case 'high':
        return <AlertTriangle className="h-5 w-5" />;
      case 'medium':
        return <Info className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getBorderColor = () => {
    switch (alert.priority) {
      case 'critical':
        return 'border-l-status-critical';
      case 'high':
        return 'border-l-orange-600';
      case 'medium':
        return 'border-l-status-warning';
      default:
        return 'border-l-civora-lightblue';
    }
  };

  return (
    <Card
      className={cn(
        'border-l-4 hover:shadow-md transition-shadow cursor-pointer',
        getBorderColor()
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn('p-2 rounded-lg', getSeverityBadgeClass(alert.priority))}>
              {getIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base">{alert.title}</h3>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded text-xs font-medium',
                    getSeverityBadgeClass(alert.priority)
                  )}
                >
                  {alert.priority.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>📍 {alert.location}</span>
                <span>🌾 {alert.affectedCrops.join(', ')}</span>
                <span>{formatDateTime(alert.timestamp)}</span>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'px-2 py-1 rounded text-xs font-medium',
              alert.status === 'active'
                ? 'bg-red-100 text-red-700'
                : alert.status === 'monitoring'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
            )}
          >
            {alert.status}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
