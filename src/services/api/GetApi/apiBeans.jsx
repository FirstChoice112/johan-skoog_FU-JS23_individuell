// import { useEffect, useState } from "react";

// const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

// export default function FetchMenu() {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetch(BASE_URL);

//         if (!response.ok) {
//           throw new Error("Failed to fetch menu items");
//         }

//         const data = await response.json();
//         if (!Array.isArray(data.menu)) {
//           throw new Error("Menu items data is not valid");
//         }

//         setMenuItems(data.menu);
//         setError(null);
//       } catch (error) {
//         setError(error);
//         console.error("Error fetching menu items:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Something went wrong, please try again!</div>;
//   }

//   return (
//     <ul>
//       {menuItems.map((item) => (
//         <li key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.desc}</p>
//           <p>Price: {item.price}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
