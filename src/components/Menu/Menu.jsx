/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu_Button from "../../assets/images/Menu/Menu_Button.png";
import "./Menu.scss";
import { useEffect, useState } from "react";
import useCounterStore from "../../store/Store";

const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

//Function för api fetch
export default function FetchMenu() {
  //deklarera tillståndsvariabeln och function
  const [menuItems, setMenuItems] = useState([]);

  // useEffect körs när sidan renderar
  useEffect(() => {
    //async function för fetch
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(BASE_URL);
        //Error
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        //konvertera svaret från servern till JSon format
        const data = await response.json();
        //Kontrollera om datan är en en giltid Array
        if (!Array.isArray(data.menu)) {
          throw new Error("Menu items data is not valid");
        }
        //Uppdatera menuItems med menyobjektet som hämtas
        setMenuItems(data.menu);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);
  //Använder slice för att ta bort en del av fetchen
  return <Menu menuItems={menuItems.slice(0, 6)} />;
}

//Function för att ta emot menuItems och rendera dem
function Menu({ menuItems }) {
  //Count Hook för + knappen
  const incrementCount = useCounterStore((state) => state.increment);
  const handleButtonClick = () => {
    incrementCount();
  };

  return (
    <div className="card__wrapper--menu">
      <Header backgroundColor="$PrimaryBackround: rgb(243, 228, 225)" />
      <h2>Meny</h2>
      <br />
      <section>
        {/* Använder map för att gå igenom varje object i MenuItems. Renderar en MenuItem komponent för varje object */}
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            menuItem={menuItem}
            onClick={handleButtonClick}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

//Function för att rendera ut Menyraderna
function MenuItem({ menuItem, onClick }) {
  return (
    <div className="section__menu--row">
      <button className="menu__button" onClick={onClick}>
        <img src={Menu_Button} alt="Menu Button" />
      </button>
      <span className="menu__product--name">
        {menuItem.title} <div className="dotted--line"></div>
      </span>
      <span className="menu__product--description">{menuItem.desc}</span>
      <span className="menu__product--price">{menuItem.price} Kr</span>
    </div>
  );
}
