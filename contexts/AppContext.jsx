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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderStatus, setOrderStatus] = useState({});

  const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

  const handleAddToCart = (menuItem) => {
    // Lägg till från meny till cart
    setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
  };
  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item, i) => i !== index);
    });
  };

  useEffect(() => {
    //IFFE - Imediatly invoked function expression
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

  //Hämtar eta och ordernr beroende på object i varukorgen
  const fetchOrderStatus = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const orderDetails = cartItems.map((item) => ({
        name: item.title,
        price: item.price,
      }));

      const requestBody = {
        details: {
          order: orderDetails,
        },
      };

      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setOrderStatus(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //Values som jag kan använda globalt!
  const values = {
    menuItems,
    setMenuItems,
    handleAddToCart,
    cartItems,
    isLoading,
    error,
    orderStatus,
    setOrderStatus,
    fetchOrderStatus,
    removeFromCart,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
