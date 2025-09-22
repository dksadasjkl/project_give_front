import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonationRoute from './routes/DonationRoute/DonationRoute';

function App() {
  return (
      <Routes>
        <Route path="/*" element={<DonationRoute />} />
      </Routes>
  );
}

export default App;
