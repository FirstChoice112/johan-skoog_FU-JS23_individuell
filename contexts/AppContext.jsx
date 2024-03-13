import { createContext, useState, useContext, useEffect } from "react";
// Skapa ett nytt context
const MyContext = createContext();
// Skapa en custom hook för att använda context
export const useMyContext = () => useContext(MyContext);
// En wrapper-komponent för att använda context
// eslint-disable-next-line react/prop-types
export const MyContextProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

  const handleAddToCart = (menuItem) => {
    // setSelectedMenuItem(menuItem);
    setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
    console.log("Added to cart:", menuItem.title, menuItem.price);
    console.log("Cart items:", cartItems);
  };

  useEffect(() => {
    //IFFE - Imediatly invoked function
    (async function () {
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
        setMenuItems(data.menu.slice(0, 6));
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    })();
  }, []);

  const values = {
    menuItems,
    setMenuItems,
    handleAddToCart,
    cartItems,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
