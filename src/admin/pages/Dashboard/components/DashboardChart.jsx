/** @jsxImportSource @emotion/react */
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const dummyData = [
  { day: "11-01", amount: 120000 },
  { day: "11-02", amount: 200000 },
  { day: "11-03", amount: 450000 },
  { day: "11-04", amount: 320000 },
  { day: "11-05", amount: 510000 },
];

const DashboardChart = () => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <AreaChart data={dummyData}>
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="amount"
          stroke="#4F46E5"
          strokeWidth={3}
          fill="url(#chartColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
