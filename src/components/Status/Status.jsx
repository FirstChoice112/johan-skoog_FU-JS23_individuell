import Button from "../Button/Button";
import Status_Drone from "../../assets/images/Status/Status_Drone.png";
import "./Status.scss";
import { Link } from "react-router-dom";

export default function Status() {
  return (
    <>
      <div className="card__wrapper--status">
        <p className="orderNumber__text">
          Ordernummer <span className="orderNumber--number">#12DV23F</span>
        </p>
        <img src={Status_Drone}></img>
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
