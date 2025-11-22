/** @jsxImportSource @emotion/react */
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { useState } from "react";
import * as s from "./ChartFilter.style";

// 주차 계산
function getWeekLabel(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const firstDay = new Date(year, 0, 1);
  const pastDays = Math.floor((date - firstDay) / 86400000);
  const week = Math.ceil((pastDays + firstDay.getDay() + 1) / 7);
  return `${year}-W${week}`;
}

// 월 계산
function getMonthLabel(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

// daily → weekly/monthly 그룹핑
function groupStats(stats, periodType) {
  const map = {};

  stats.forEach((item) => {
    const key =
      periodType === "daily"
        ? item.date
        : periodType === "weekly"
        ? getWeekLabel(item.date)
        : getMonthLabel(item.date);

    if (!map[key]) map[key] = { date: key, amount: 0 };
    map[key].amount += item.amount;
  });

  return Object.values(map).sort((a, b) => a.date.localeCompare(b.date));
}

const DashboardChart = ({ donationDailyStats = [], salesDailyStats = [] }) => {
  const [selectedMetric, setSelectedMetric] = useState("donation"); // donation | sales
  const [period, setPeriod] = useState("daily"); // daily | weekly | monthly

  const rawData =
    selectedMetric === "donation" ? donationDailyStats : salesDailyStats;

  const chartData = groupStats(rawData, period);

  const labelName = selectedMetric === "donation" ? "기부금액" : "매출액";

  return (
    <div>
      {/* === 필터 UI === */}
      <div css={s.filterWrap}>
        <div css={s.leftGroup}>
          <button
            css={s.btn(selectedMetric === "donation")}
            onClick={() => setSelectedMetric("donation")}
          >
            기부금액
          </button>
          <button
            css={s.btn(selectedMetric === "sales")}
            onClick={() => setSelectedMetric("sales")}
          >
            매출액
          </button>
        </div>

        <div css={s.rightGroup}>
          <button
            css={s.btn(period === "daily")}
            onClick={() => setPeriod("daily")}
          >
            일
          </button>
          <button
            css={s.btn(period === "weekly")}
            onClick={() => setPeriod("weekly")}
          >
            주
          </button>
          <button
            css={s.btn(period === "monthly")}
            onClick={() => setPeriod("monthly")}
          >
            월
          </button>
        </div>
      </div>

      {/* === 차트 === */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(v) => `${(v / 10000).toFixed(0)}만`} />

          <Tooltip
            formatter={(value) => `${Number(value).toLocaleString()}원`}
            labelFormatter={(label) => `날짜: ${label}`}
          />

          <Legend formatter={() => labelName} />

          <Line
            type="monotone"
            dataKey="amount"
            name={labelName}
            stroke={selectedMetric === "donation" ? "#4F46E5" : "#10B981"}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={900}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
