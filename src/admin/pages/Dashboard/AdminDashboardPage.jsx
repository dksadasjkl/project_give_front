/** @jsxImportSource @emotion/react */
import * as s from "./Dashboard.style";
import DashboardCard from "./components/DashboardCard";
import DashboardChart from "./components/DashboardChart";
import RecentDonationsTable from "./components/RecentDonationsTable";
import RecentProjectCard from "./components/RecentProjectCard";

import { useQuery } from "@tanstack/react-query";
import { getAdminDonationListRequest } from "../../apis/adminDonationApi";

const AdminDashboard = () => {
  const { data } = useQuery(
    ["adminDashboardList"],
    () => getAdminDonationListRequest(1, 50),
    { refetchOnWindowFocus: false }
  );

  const items = data?.data?.items || [];

  /** KPI 계산 */
  const totalProjects = items.length;
  const activeProjects = items.filter((p) => new Date(p.donationProjectEndDate) >= new Date()).length;
  const totalAmount = items.reduce((acc, p) => acc + (p.donationProjectCurrentAmount || 0), 0);
  const recentProjects = items.slice(0, 3);

  return (
    <div css={s.layout}>
      <h1 css={s.pageTitle}>대시보드</h1>

      {/* KPI Cards */}
      <div css={s.kpiGrid}>
        <DashboardCard title="전체 프로젝트" value={`${totalProjects}개`} />
        <DashboardCard title="진행 중" value={`${activeProjects}개`} />
        <DashboardCard title="총 후원 금액" value={`${totalAmount.toLocaleString()}원`} />
        <DashboardCard title="이번주 신규 등록" value={`3개`} /> {/* 임시 */}
      </div>

      {/* 그래프 */}
      <div css={s.chartBox}>
        <DashboardChart />
      </div>

      {/* 최근 데이터 */}
      <div css={s.bottomGrid}>
        <RecentDonationsTable />
        <div css={s.recentProjectList}>
          <h3 css={s.sectionTitle}>최근 등록된 프로젝트</h3>
          {recentProjects.map((p) => (
            <RecentProjectCard key={p.donationProjectId} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
