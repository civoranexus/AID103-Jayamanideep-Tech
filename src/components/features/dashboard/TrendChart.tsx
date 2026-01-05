import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendData } from '@/types';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface TrendChartProps {
  data: TrendData[];
}

export default function TrendChart({ data }: TrendChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Disease Detection Trends</CardTitle>
        <p className="text-sm text-muted-foreground">
          Analysis of disease severity patterns over the past 30 days
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EA580C" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#EA580C" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Area
              type="monotone"
              dataKey="severityCritical"
              stackId="1"
              stroke="#DC2626"
              fillOpacity={1}
              fill="url(#colorCritical)"
              name="Critical"
            />
            <Area
              type="monotone"
              dataKey="severityHigh"
              stackId="1"
              stroke="#EA580C"
              fillOpacity={1}
              fill="url(#colorHigh)"
              name="High"
            />
            <Area
              type="monotone"
              dataKey="severityMedium"
              stackId="1"
              stroke="#F59E0B"
              fillOpacity={1}
              fill="url(#colorMedium)"
              name="Medium"
            />
            <Area
              type="monotone"
              dataKey="severityLow"
              stackId="1"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorLow)"
              name="Low"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
