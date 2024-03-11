import Button from "../Button/Button";
import Status_Drone from "../../assets/images/Status/Status_Drone.png";
import "./Status.scss";
import { Link } from "react-router-dom";
import apiOrderStatus from "../../services/api/GetApi/apiOrderStatus";
import { useEffect } from "react";

export default function Status() {
  const { isLoading, error, orderNr } = apiOrderStatus(); // Använda hooken

  useEffect(() => {
    if (orderNr !== undefined && orderNr !== null) {
      console.log("Order status:", orderNr);
    }
    // Körs när orderNr ändras
  }, [orderNr]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong, please try again!</div>;
  }

  return (
    <>
      <div className="card__wrapper--status">
        <p className="orderNumber__text">
          Ordernummer <span className="orderNumber--number">#12DV23F</span>
        </p>
        <img src={Status_Drone} alt="Drone" />
        <h3>Din beställning är på väg!</h3>
        <p>
          <span className="minutes">13</span> minuter
        </p>
        <Link to="/" className="link">
          <Button buttontext="Ok, cool!" buttonStyle="secondary" />
        </Link>
      </div>
    </>
  );
}
