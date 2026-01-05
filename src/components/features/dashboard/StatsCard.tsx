import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = 'default',
}: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-status-healthy';
      case 'warning':
        return 'bg-yellow-50 border-status-warning';
      case 'danger':
        return 'bg-red-50 border-status-critical';
      default:
        return 'gradient-civora-subtle border-civora-lightblue';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'success':
        return 'text-status-healthy';
      case 'warning':
        return 'text-status-warning';
      case 'danger':
        return 'text-status-critical';
      default:
        return 'text-civora-blue';
    }
  };

  return (
    <Card className={cn('border-l-4', getVariantStyles())}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn('h-5 w-5', getIconColor())} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span
              className={cn(
                'text-xs font-medium',
                trend.value > 0 ? 'text-green-600' : 'text-red-600'
              )}
            >
              {trend.value > 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className="text-xs text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
