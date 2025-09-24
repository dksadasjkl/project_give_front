import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonationRoute from './routes/DonationRoute/DonationRoute';
import RootLayout from './components/Root/RootLayout/RootLayout';
import { RootHeader } from './components/Root/RootHeader/RootHeader';
import RootContainer from './components/Root/RootContainer/RootContainer';
import { RootFooter } from './components/Root/RootFooter/RootFooter';
import PageContainer from './components/Page/PageContainer/PageContainer';
import AccountRoute from './routes/AccountRoute/AccountRoute';

function App() {
  return (
    <RootLayout>
        <RootHeader />  
      <RootContainer>
        <PageContainer>
          <Routes>
            <Route path="/*" element={
              <>
                <DonationRoute />
                <AccountRoute />
              </>
              } />
          </Routes>
        </PageContainer>
      <RootFooter />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
