import "./Landingpage.scss";
import Landing_Left from "../../assets/images/Landing/Left__Landing.png";
import Landing_Rigth from "../../assets/images/Landing/Right__Landing.png";
import Symbol from "../../assets/images/Landing/Symbol.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Link to="/Nav" className="card__wrapper">
        <section className="hero__section">
          <div className="hero__symbol">
            <img src={Symbol} alt="logo Image" />
          </div>
          <h1>AIR BEAN</h1>
          <p className="hero__text">DRONEDELIVERED COFFEE</p>
        </section>
        <section className="wrapper__image--left">
          <img src={Landing_Left} alt="Left Landing" />
        </section>
        <section className="wrapper__image--right">
          <img src={Landing_Rigth} alt="Right Landing" />
        </section>
      </Link>
    </>
  );
}
