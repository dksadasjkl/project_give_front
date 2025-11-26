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
import AdminStoreProductListPage from './admin/pages/Store/Product/AdminStoreProductListPage';
import AdminStoreProductDetailPage from './admin/pages/Store/Product/AdminStoreProductDetailPage';
import AdminStoreProductEditPage from './admin/pages/Store/Product/AdminStoreProductEditPage';
import AdminStoreProductCreatePage from './admin/pages/Store/Product/AdminStoreProductCreatePage';
import AdminStoreOrderListPage from './admin/pages/Store/Order/AdminStoreOrderListPage';
import AdminStoreOrderDetailPage from './admin/pages/Store/Order/AdminStoreOrderDetailPage';
import AdminStorePaymentListPage from './admin/pages/Store/Payment/AdminStorePaymentListPage';
import AdminStorePaymentDetailPage from './admin/pages/Store/Payment/AdminStorePaymentDetailPage';
import AdminStoreShippingListPage from './admin/pages/Store/Shipping/AdminStoreShippingListPage';
import AdminStoreShippingDetailPage from './admin/pages/Store/Shipping/AdminStoreShippingDetailPage';
import AdminStoreReviewListPage from './admin/pages/Store/Review/AdminStoreReviewListPage';
import AdminStoreReviewDetailPage from './admin/pages/Store/Review/AdminStoreReviewDetailPage';
import AdminStoreReportListPage from './admin/pages/Store/Report/AdminStoreReportListPage';
import AdminStoreQnAListPage from './admin/pages/Store/QnA/AdminStoreQnAListPage';
import AdminStoreQnADetailPage from './admin/pages/Store/QnA/AdminStoreQnADetailPage';
import AdminStorePointListPage from './admin/pages/Store/Point/AdminStorePointListPage';
import AdminUserListPage from './admin/pages/User/AdminUserListPage';
import AdminUserDetailPage from './admin/pages/User/AdminUserDetailPage';
import AdminOnlyRoute from './admin/route/AdminOnlyRoute';

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

          <Route
            path="/admin"
            element={
              <AdminOnlyRoute principal={principalQuery.data?.data?.principal}>
                <AdminLayout />
              </AdminOnlyRoute>
            }
          >
            <Route index element={<AdminDashboardPage />} />

            {/* 기부 */}
            <Route path="donation" element={<AdminDonationListPage />} />
            <Route path="donation/create" element={<AdminDonationCreatePage />} />
            <Route path="donation/:projectId" element={<AdminDonationDetailPage />} />
            <Route path="donation/:projectId/edit" element={<AdminDonationEditPage />} />
            <Route path="donation/:projectId/details" element={<AdminDonationDetailManagePage />} />
            <Route path="donation/:projectId/comments" element={<AdminDonationCommentPage />} />
            <Route path="donation/:projectId/contributions" element={<AdminDonationContributionPage />} />

            {/* 펀딩 */}
            <Route path="funding" element={<AdminFundingListPage />} />
            <Route path="funding/create" element={<AdminFundingCreatePage />} />
            <Route path="funding/:projectId" element={<AdminFundingDetailPage />} />
            <Route path="funding/:projectId/edit" element={<AdminFundingEditPage />} />
            <Route path="funding/:projectId/details" element={<AdminFundingDetailManagePage />} />
            <Route path="funding/:projectId/rewards" element={<AdminFundingRewardManagePage />} />
            <Route path="funding/:projectId/comments" element={<AdminFundingCommentPage />} />
            <Route path="funding/:projectId/contributions" element={<AdminFundingContributionPage />} />

            {/* 스토어 */}
            <Route path="store" element={<AdminStoreProductListPage />} />
            <Route path="store/products" element={<AdminStoreProductListPage />} />
            <Route path="store/products/create" element={<AdminStoreProductCreatePage />} />
            <Route path="store/products/:productId" element={<AdminStoreProductDetailPage />} />
            <Route path="store/products/:productId/edit" element={<AdminStoreProductEditPage />} />

            <Route path="store/orders" element={<AdminStoreOrderListPage />} />
            <Route path="store/orders/:orderId" element={<AdminStoreOrderDetailPage />} />

            <Route path="store/payments" element={<AdminStorePaymentListPage />} />
            <Route path="store/payments/:paymentId" element={<AdminStorePaymentDetailPage />} />

            <Route path="store/shipping" element={<AdminStoreShippingListPage />} />
            <Route path="store/shipping/:shippingId" element={<AdminStoreShippingDetailPage />} />

            <Route path="store/reviews" element={<AdminStoreReviewListPage />} />
            <Route path="store/reviews/:reviewId" element={<AdminStoreReviewDetailPage />} />

            <Route path="store/reports" element={<AdminStoreReportListPage />} />

            <Route path="store/qna" element={<AdminStoreQnAListPage />} />
            <Route path="store/qna/:qnaId" element={<AdminStoreQnADetailPage />} />

            <Route path="store/points" element={<AdminStorePointListPage />} />

            {/* 유저 */}
            <Route path="users" element={<AdminUserListPage />} />
            <Route path="users/:userId" element={<AdminUserDetailPage />} />

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
