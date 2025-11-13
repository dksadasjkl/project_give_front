import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";

function MainRoute({ principal }) {
  return (
    <Routes>
      <Route path="/" element={<MainPage principal={principal} />} />
    </Routes>
  );
}

export default MainRoute;