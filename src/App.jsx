import LandingPage from "./components/LandingPage/Landingpage";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Status from "./components/Status/Status";
import Inlogg from "./components/Inlogg/Inlogg";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./pages/ErrorPage.tsx/ErrorPage";

function App() {
  return (
    <>
      <LandingPage />
      <Nav />
      <Menu />
      <About />
      <Cart />
      <Status />
      <Inlogg />
      <Profile />
      <ErrorPage />
    </>
  );
}

export default App;

//VAlidate sidorna?? HTML/JSX!
