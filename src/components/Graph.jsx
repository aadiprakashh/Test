import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area
} from 'recharts';

const data = [
  { day: 'Mon', revenue: 820 },
  { day: 'Tue', revenue: 932 },
  { day: 'Wed', revenue: 901 },
  { day: 'Thu', revenue: 934 },
  { day: 'Fri', revenue: 1290 },
  { day: 'Sat', revenue: 1330 },
  { day: 'Sun', revenue: 1320 }
];

const Graph = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        
        {/* Line component with activeDot and hover effect */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#4F46E5"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 6,
            stroke: '#ffffff',  // White border on hover
            strokeWidth: 2
          }}
        />

        {/* Area component with dynamic fillOpacity */}
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="none"
          fill={`url(#colorRevenue)`}
          fillOpacity={hovered ? 0.5 : 0.3}  // Change opacity on hover
          onMouseEnter={() => setHovered(true)}  // Set hover state to true
          onMouseLeave={() => setHovered(false)}  // Set hover state to false
        />
        
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.3)" />
            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.1)" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
