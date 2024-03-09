/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu_Button from "../../assets/images/Menu/Menu_Button.png";
import "./Menu.scss";
import { useEffect, useState } from "react";
import useCounterStore from "../../store/Store";

const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

export default function FetchMenu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }

        const data = await response.json();
        if (!Array.isArray(data.menu)) {
          throw new Error("Menu items data is not valid");
        }

        setMenuItems(data.menu);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return <Menu menuItems={menuItems.slice(0, 6)} />;
}

function Menu({ menuItems }) {
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

function MenuItem({ menuItem, onClick }) {
  return (
    <div className="section__menu--row">
      <button className="menu__button" onClick={onClick}>
        <img src={Menu_Button} alt="Menu Button" />
      </button>
      <span className="menu__product--name">{menuItem.title}</span>
      <span className="menu__product--description">{menuItem.desc}</span>
      <span className="menu__product--price">{menuItem.price} Kr</span>
    </div>
  );
}
