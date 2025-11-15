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
            <Route path="donation" element={<AdminDonationListPage />} />
            <Route path="donation/:projectId" element={<AdminDonationDetailPage />} />
            <Route path="donation/:projectId/edit" element={<AdminDonationEditPage />} />
          </Route>


            {/* 메인 페이지 */}
            <Route path="/" element={
              <MainRoute principal={principalQuery.data?.data?.principal} />
            } />

            {/* 🔥 내 주변 기부 지도 */}
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
