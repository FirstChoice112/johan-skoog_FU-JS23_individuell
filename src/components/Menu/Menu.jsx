/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu_Button from "../../assets/images/Menu/Menu_Button.png";
import "./Menu.scss";
import useCounterStore from "../../store/Store";
import { useMyContext } from "../../../contexts/AppContext";

//Function för att ta emot menuItems och rendera dem
export default function Menu() {
  const { menuItems, handleAddToCart } = useMyContext();
  //Count Hook för + knappen
  const incrementCount = useCounterStore((state) => state.increment);
  if (!menuItems) {
    return <div>Loading...</div>;
  }
  const handleButtonClick = (menuItem) => {
    incrementCount();
    handleAddToCart(menuItem); // Skicka endast id, title och price till handleAddToCart
  };

  return (
    <div className="card__wrapper--menu">
      <Header backgroundColor="$PrimaryBackround: rgb(243, 228, 225)" />
      <h2>Meny</h2>
      <br />
      <section>
        {/* Använder map för att gå igenom varje object i MenuItems. Renderar en MenuItem komponent för varje object */}
        {menuItems?.map((menuItem, index) => (
          <MenuItem
            key={index}
            menuItem={menuItem}
            onClick={handleButtonClick}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

//Function för att rendera ut Menyraderna
const MenuItem = ({ menuItem, onClick }) => {
  return (
    <div className="section__menu--row">
      <button className="menu__button" onClick={() => onClick(menuItem)}>
        <img src={Menu_Button} alt="Menu Button" />
      </button>
      <span className="menu__product--name">
        {menuItem.title} <div className="dotted--line"></div>
      </span>
      <span className="menu__product--description">{menuItem.desc}</span>
      <span className="menu__product--price">{menuItem.price} Kr</span>
    </div>
  );
};
