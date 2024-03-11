import LandingPage from "./components/LandingPage/Landingpage";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Status from "./components/Status/Status";
import Inlogg from "./components/Inlogg/Inlogg";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./pages/ErrorPage.tsx/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Inlogg" element={<Inlogg />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
