import Button from "../Button/Button";
import Header from "../Header/Header";
import Upp from "../../assets/images/Cart/Upp.svg";
import Down from "../../assets/images/Cart/Down.svg";
import "./Cart.scss";

export default function Cart() {
  return (
    <>
      <div className="card__wrapper--cart">
        <Header backgroundColor=" rgb(47, 41, 38, 0.7)" />
        <div className="cart__wrapper">
          <h2>Din beställning</h2>
          <section>
            <div className="orderline">
              <h3>Bryggkaffe</h3>
              <hr className="dotted__line" />
              <p>98 kr</p>
              <div className="rightSide__wrapper">
                <button className="rightSide__btn">
                  <img src={Upp} />
                </button>
                <p className="rightSide__btn--quantity">2</p>
                <button className="rightSide__btn">
                  <img src={Down} />
                </button>
              </div>
            </div>
            <br></br>
            <div className="orderline">
              <div>
                <h3>Caffe Doppio</h3>
                <hr className="dotted__line" />
                <p>49 kr</p>
              </div>
              <div className="rightSide__wrapper">
                <button className="rightSide__btn">
                  <img src={Upp} />
                </button>
                <p className="rightSide__btn--quantity">1</p>
                <button className="rightSide__btn">
                  <img src={Down} />
                </button>
              </div>
            </div>
            <br></br>
            <div className="orderline">
              <div>
                <h3>Cappuccino</h3>
                <hr className="dotted__line" />
                <p>196 kr</p>
              </div>
              <div className="rightSide__wrapper">
                <button className="rightSide__btn">
                  <img src={Upp} />
                </button>
                <p className="rightSide__btn--quantity">4</p>
                <button className="rightSide__btn">
                  <img src={Down} />
                </button>
              </div>
            </div>
          </section>

          <div className="wrapper__total">
            <h3>Total </h3> <hr className="finale__line" />
            <h3 className="total__cost">l343kr</h3>
            <p>inkl moms + drönarleverans</p>
          </div>
          <div className="wrapper__button">
            <Button buttontext="Take my money!" />
          </div>
        </div>
      </div>
    </>
  );
}
