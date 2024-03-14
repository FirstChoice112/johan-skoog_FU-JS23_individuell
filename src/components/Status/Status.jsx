import Button from "../Button/Button";
import Status_Drone from "../../assets/images/Status/Status_Drone.png";
import "./Status.scss";
import { Link } from "react-router-dom";
import { useMyContext } from "../../../contexts/AppContext";

export default function Status() {
  const { orderStatus } = useMyContext();

  return (
    <>
      <div className="card__wrapper--status">
        <p className="orderNumber__text">
          Ordernummer{" "}
          <span className="orderNumber--number">#{orderStatus?.orderNr}</span>
        </p>
        <img src={Status_Drone} alt="Drone" />
        <h3>Din beställning är på väg!</h3>
        <p>
          <span className="minutes">{orderStatus?.eta}</span> minuter
        </p>
        <Link to="/" className="link">
          <Button buttontext="Ok, cool!" buttonStyle="secondary" />
        </Link>
      </div>
    </>
  );
}
