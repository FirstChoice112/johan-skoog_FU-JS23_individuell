import { useState } from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Upp from "../../assets/images/Cart/Upp.svg";
import Down from "../../assets/images/Cart/Down.svg";
import "./Cart.scss";
import useCounterStore from "../../store/Store";
import { Link, useNavigate } from "react-router-dom";
import { useMyContext } from "../../../contexts/AppContext";

export default function Cart() {
  const { cartItems, fetchOrderStatus } = useMyContext();
  const [itemQuantities, setItemQuantities] = useState({});

  const navigate = useNavigate();

  const getTotalCost = () => {
    let total = 0;
    cartItems.forEach((item, index) => {
      const quantity = itemQuantities[index] || 0;
      total += item.price * quantity;
      total += item.price;
    });
    return total;
  };

  const handleIncrement = (index) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
    setItemQuantities(updatedQuantities);
    const newItemPrice = cartItems[index].price;
    getTotalCost((prevTotalCost) => prevTotalCost + newItemPrice);
    useCounterStore.getState().increment();
  };

  const handleDecrement = (index) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setItemQuantities(updatedQuantities);
    }
    if (updatedQuantities[index] === 0) {
      // removeFromCart(index);
    }
    useCounterStore.getState().decrement();
  };

  const handleTakeMyMoney = async (event) => {
    event.preventDefault();
    if (cartItems.length === 0) {
      alert(
        "Varukorgen är tom! Lägg till något om du vill genomföra ett köp :)"
      );
      return;
    }
    await fetchOrderStatus();
    navigate("/Status");
  };

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
                <button
                  className="rightSide__btn"
                  onClick={() => handleIncrement(index)}
                >
                  <img src={Upp} alt="Increase" />
                </button>
                <p className="rightSide__btn--quantity">
                  {(itemQuantities[index] || 0) + 1}
                </p>
                <button
                  className="rightSide__btn"
                  onClick={() => handleDecrement(index)}
                >
                  <img src={Down} alt="Decrease" />
                </button>
              </div>
            </div>
          ))}
        </section>

        <div className="wrapper__total">
          <h3>Total </h3>
          <hr className="finale__line" />
          <h3 className="total__cost">{getTotalCost()} kr</h3>
          <p>inkl moms + drönarleverans</p>
        </div>
        <div className="wrapper__button">
          <Link
            to="/Status"
            className="link"
            onClick={(event) => handleTakeMyMoney(event)}
          >
            <Button buttontext="Take my money!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
