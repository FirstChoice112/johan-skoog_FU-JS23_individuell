import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu_Button from "../../assets/images/Menu/Menu_Button.png";
import "./Menu.scss";

export default function Menu() {
  return (
    <>
      <div className="card__wrapper--menu">
        <Header backgroundColor="$PrimaryBackround: rgb(243, 228, 225)" />
        <h2>Meny</h2>
        <br></br>
        <section>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Bryggkaffe</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
          <br></br>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Caffe Doppio</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
          <br></br>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Cappuccino</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
          <br></br>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Latte Macchiato</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
          <br></br>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Kaffe Latte</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
          <br></br>
          <div className="section__menu--row">
            <button className="menu__button">
              <img src={Menu_Button} />
            </button>
            <span className="menu__product--name">Cortado</span>
            <span className="menu__product--description">
              Bryggd på månadens bönor
            </span>
            <span className="menu__product--price">49 kr</span>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
