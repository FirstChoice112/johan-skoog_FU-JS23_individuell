import "./Nav.scss";
import Nav_close from "../../assets/images/Nav/Nav_close.png";

export default function Nav() {
  return (
    <>
      <div className="card__wrapper--nav">
        <button className="button__icon">
          <img src={Nav_close} alt="Close Navigation" />
        </button>
        <section className="section__menu">
          <h3>Meny</h3>
          <div className="line__break"></div>
          <h3>Vårt kaffe</h3>
          <div className="line__break"></div>
          <h3>Min profil</h3>
          <div className="line__break"></div>
          <h3>Orderstatus</h3>
        </section>
      </div>
    </>
  );
}
