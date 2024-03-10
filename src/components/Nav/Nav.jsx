import "./Nav.scss";
import Nav_close from "../../assets/images/Nav/Nav_close.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="card__wrapper--nav">
        <Link to="/Menu" className="button__icon">
          <img src={Nav_close} alt="Close Navigation" />
        </Link>
        <section className="section__menu">
          <Link to="/Menu" className="link-no-style">
            <h3>Meny</h3>
          </Link>
          <div className="line__break"></div>
          <Link to="/About" className="link-no-style">
            <h3>Vårt kaffe</h3>
          </Link>
          <Link to="/Inlogg" className="link-no-style">
            <h3>Min profil</h3>
          </Link>
          <div className="line__break"></div>
          <Link to="/Status" className="link-no-style">
            <h3>Orderstatus</h3>
          </Link>
        </section>
      </div>
    </>
  );
}
