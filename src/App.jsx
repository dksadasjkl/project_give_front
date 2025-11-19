import './App.css';
import { Route, Routes } from 'react-router-dom';
import DonationRoute from './routes/DonationRoute/DonationRoute';
import RootLayout from './components/Root/RootLayout/RootLayout';
import { RootHeader } from './components/Root/RootHeader/RootHeader';
import RootContainer from './components/Root/RootContainer/RootContainer';
import { RootFooter } from './components/Root/RootFooter/RootFooter';
import PageContainer from './components/Page/PageContainer/PageContainer';
import AccountRoute from './routes/AccountRoute/AccountRoute';
import { useQuery } from '@tanstack/react-query';
import { getPrincipalRequest } from './apis/api/Account/account';
import MyPageRoute from './routes/MyPageRoute/MyPageRoute';
import FundingRoute from './routes/FundingRoute/FundingRoute';
import StoreRoute from './routes/StoreRoute/StoreRoute';
import MainRoute from './routes/MainRoute/MainRoute';
import DonationNearbyMap from './pages/DonationNearby/DonationNearbyMap';
import AdminDonationListPage from './admin/pages/Donation/AdminDonationListPage';
import AdminLayout from './admin/layout/AdminLayout/AdminLayout';
import AdminDashboardPage from './admin/pages/Dashboard/AdminDashboardPage';
import AdminDonationDetailPage from './admin/pages/Donation/AdminDonationDetailPage';
import AdminDonationEditPage from './admin/pages/Donation/AdminDonationEditPage';
import AdminDonationDetailManagePage from './admin/pages/Donation/AdminDonationDetailManagePage';
import AdminDonationCreatePage from './admin/pages/Donation/AdminDonationCreatePage';
import AdminDonationCommentPage from './admin/pages/Donation/AdminDonationCommentPage';
import AdminDonationContributionPage from './admin/pages/Donation/AdminDonationContributionPage';
import AdminFundingCreatePage from './admin/pages/Funding/AdminFundingCreatePage';
import AdminFundingListPage from './admin/pages/Funding/AdminFundingListPage';
import AdminFundingDetailPage from './admin/pages/Funding/AdminFundingDetailPage';
import AdminFundingEditPage from './admin/pages/Funding/AdminFundingEditPage';
import AdminFundingDetailManagePage from './admin/pages/Funding/AdminFundingDetailManagePage';
import AdminFundingRewardManagePage from './admin/pages/Funding/AdminFundingRewardManagePage';
import AdminFundingCommentPage from './admin/pages/Funding/AdminFundingCommentPage';
import AdminFundingContributionPage from './admin/pages/Funding/AdminFundingContributionPage';

function App() {

  const principalQuery = useQuery(
    ["principalQuery"], 
    getPrincipalRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {},
      onError: (error) => {},
    }
  );
  console.log("App principalQuery.data:", principalQuery.data);
  
  return (
    <RootLayout>
      <RootHeader />  
      <RootContainer>
        <PageContainer>
          <Routes>  

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />

            {/* 기부 프로젝트 */}
            <Route path="donation" element={<AdminDonationListPage />} />
            <Route path="donation/create" element={<AdminDonationCreatePage />} /> 
            <Route path="donation/:projectId" element={<AdminDonationDetailPage />} />
            <Route path="donation/:projectId/edit" element={<AdminDonationEditPage />} />
            <Route path="donation/:projectId/details" element={<AdminDonationDetailManagePage />} />
            <Route path="donation/:projectId/comments" element={<AdminDonationCommentPage />} />
            <Route path="donation/:projectId/contributions" element={<AdminDonationContributionPage />} />


            <Route path="funding" element={<AdminFundingListPage />} />
            <Route path="funding/create" element={<AdminFundingCreatePage />} />
            <Route path="funding/:projectId" element={<AdminFundingDetailPage />} />
            <Route path="funding/:projectId/edit" element={<AdminFundingEditPage />} />
            <Route path="funding/:projectId/details" element={<AdminFundingDetailManagePage />} />
            <Route path="funding/:projectId/rewards" element={<AdminFundingRewardManagePage />} />
            <Route path="funding/:projectId/comments" element={<AdminFundingCommentPage />} />
            <Route path="funding/:projectId/contributions" element={<AdminFundingContributionPage />} />
          </Route>



            {/* 메인 페이지 */}
            <Route path="/" element={
              <MainRoute principal={principalQuery.data?.data?.principal} />
            } />

            {/* 내 주변 기부 지도 */}
            <Route path="/map" element={<DonationNearbyMap principal={principalQuery.data?.data?.principal} />} />

            <Route path="/*" element={
              <>
                <DonationRoute principal={principalQuery.data?.data?.principal}/>
                <AccountRoute />
                <MyPageRoute principal={principalQuery.data?.data?.principal}/>
                <FundingRoute principal={principalQuery.data?.data?.principal}/>
                <StoreRoute principal={principalQuery.data?.data?.principal}/>
              </>
              } />
          </Routes>
        </PageContainer>
      </RootContainer>
      <RootFooter />
    </RootLayout>
  );
}

export default App;
