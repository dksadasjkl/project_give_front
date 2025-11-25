/** @jsxImportSource @emotion/react */
import * as s from "./Dashboard.style";
import DashboardCard from "./components/DashboardCard";
import DashboardChart from "./components/DashboardChart";
import RecentDonationsTable from "./components/RecentDonationsTable";
import RecentProjectCard from "./components/RecentProjectCard";
import TopStoreProductCard from "./components/TopStoreProductCard";

import { useQuery } from "@tanstack/react-query";
import { getAdminDashboardRequest } from "../../apis/adminDashboardApi";

const AdminDashboard = () => {
  const { data, isLoading, error } = useQuery(
    ["adminDashboard"],
    getAdminDashboardRequest,
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <div css={s.loading}>대시보드 데이터를 불러오는 중...</div>;
  if (error) return <div css={s.error}>대시보드 데이터를 불러오는 중 오류가 발생했습니다.</div>;

  const dash = data?.data || {};

  const {
      donationProjectCount = 0,
      fundingProjectCount = 0,
      totalDonationAmount = 0,
      monthlyDonationAmount = 0,
      totalSales = 0,
      monthlySales = 0,
      userCount = 0,
      todayUserCount = 0,

      donationDailyStats = [],
      donationMonthlyStats = [],
      salesDailyStats = [],
      salesMonthlyStats = [],

      recentDonations = [],
      topDonationProjects = [],
      topStoreProducts = [],
  } = dash;

  return (
    <div css={s.layout}>
      <h1 css={s.pageTitle}>관리자 대시보드</h1>

      {/* KPI Cards (6개) */}
      <div css={s.kpiGrid}>
        <DashboardCard
          title="전체 기부 프로젝트"
          value={`${donationProjectCount}개`}
        />
        <DashboardCard
          title="전체 펀딩 프로젝트"
          value={`${fundingProjectCount}개`}
        />
        <DashboardCard
          title="총 모금액"
          value={`${totalDonationAmount.toLocaleString()}원`}
        />
        <DashboardCard
          title="이번 달 모금액"
          value={`${monthlyDonationAmount.toLocaleString()}원`}
        />
        <DashboardCard
          title="총 스토어 매출"
          value={`${totalSales.toLocaleString()}원`}
        />
        <DashboardCard
          title="이번 달 매출"
          value={`${monthlySales.toLocaleString()}원`}
          subText={`회원수 ${userCount.toLocaleString()}명 / 오늘 가입 ${todayUserCount}명`}
        />
      </div>

      {/* 그래프 영역: 기부 & 매출 추이 */}
      <div css={s.chartBox}>
        <h3 css={s.sectionTitle}>일자별 기부 / 매출 추이</h3>
        <DashboardChart
          donationDailyStats={donationDailyStats}
          donationMonthlyStats={donationMonthlyStats}
          salesDailyStats={salesDailyStats}
          salesMonthlyStats={salesMonthlyStats}
        />
      </div>

      {/* 하단 영역: 최근 후원 / 인기 프로젝트 / 인기 상품 */}
      <div css={s.bottomGrid}>
        {/* 최근 후원 내역 테이블 */}
        <RecentDonationsTable recentDonations={recentDonations} />

        {/* 오른쪽: 인기 TOP5 */}
        <div css={s.rightColumn}>
          <div css={s.cardBox}>
            <h3 css={s.sectionTitle}>인기 기부 프로젝트 TOP 5</h3>
            {topDonationProjects.length === 0 && (
              <p css={s.emptyText}>인기 기부 프로젝트 데이터가 없습니다.</p>
            )}
            {(topDonationProjects ?? [])
              .filter((p) => p)
              .map((p) => (
                <RecentProjectCard key={p.donationProjectId} project={p} />
              ))}
          </div>

            <div css={s.cardBox} style={{ marginTop: 20 }}>
            <h3 css={s.sectionTitle}>인기 쇼핑 상품 TOP 5</h3>
            {(topStoreProducts ?? [])
              .filter((prod) => prod && prod.productId)
              .map((prod) => (
                <TopStoreProductCard key={prod.productId} product={prod} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
