/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Header from "../Header/Header";
import Upp from "../../assets/images/Cart/Upp.svg";
import Down from "../../assets/images/Cart/Down.svg";
import "./Cart.scss";
import useCounterStore from "../../store/Store";
import { Link } from "react-router-dom";

import { useMyContext } from "../../../contexts/AppContext";

export default function Cart() {
  const { cartItems } = useMyContext();
  const { increment, decrement } = useCounterStore();
  return (
    <div className="card__wrapper--cart">
      <Header backgroundColor="rgb(47, 41, 38, 0.7)" />
      <div className="cart__wrapper">
        <div className="triangle"></div>
        <h2>Din beställning</h2>
        <section>
          {cartItems.map((item, index) => (
            <div className="orderline" key={index}>
              <h3>{item.title}</h3>
              <hr className="dotted__line" />
              <p>{item.price} kr</p>
              <div className="rightSide__wrapper">
                <button className="rightSide__btn" onClick={increment}>
                  <img src={Upp} alt="Increase" />
                </button>
                <p className="rightSide__btn--quantity">1</p>
                <button className="rightSide__btn" onClick={decrement}>
                  <img src={Down} alt="Decrease" />
                </button>
              </div>
            </div>
          ))}
        </section>

        <div className="wrapper__total">
          <h3>Total </h3> <hr className="finale__line" />
          <h3 className="total__cost">l343kr</h3>
          <p>inkl moms + drönarleverans</p>
        </div>
        <div className="wrapper__button">
          <Link to="/Status" className="link">
            <Button buttontext="Take my money!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
