import Button from "../Button/Button";
import Header from "../Header/Header";
import Profile_inlogg from "../../assets/images/Profile/Profile_Inlogg.jpg";
import "./Inlogg.scss";

export default function Inlogg() {
  return (
    <>
      <div className="card__wrapper--inlogg">
        <Header backgroundColor=" rgb(47, 41, 38)" />
        <section className="section__inlogg">
          <img className="logo__img" src={Profile_inlogg} />
          <h3>Välkommen till AirBean-familjen!</h3>
          <p>
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik.
          </p>
          <form>
            <div className="named__form">
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Sixten Kaffelövér"
              />
            </div>
            <div className="email__form">
              <label htmlFor="email">E-post:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sixten.kaffelover@zocom.se"
              />
            </div>
          </form>
          <div className="gdpr">
            <button></button> <p>GDPR Ok!</p>
          </div>
          <div className="inlogg__button">
            <Button buttontext="Brew me a cup!" />
          </div>
        </section>
      </div>
    </>
  );
}
