// import { useEffect, useState } from "react";

// const BASE_URL = "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/";

// export default function FetchMenu() {
//   //Hook för att hantera Error
//   const [error, setError] = useState(null);
//   //Tillståndsvariabel och uppdateringsfunction, startvärde false
//   const [isLoading, setIsLoading] = useState(false);
//   //Variabel +  uppdateringsfunction, startvärde []
//   const [menuItems, setMenuItems] = useState([]);
//   //useEffekt körs när sidan renderas första gången
//   useEffect(() => {
//     //Definition av async function
//     const fetchMenuItems = async () => {
//       //isLoading = true, hämtning sker
//       setIsLoading(true);

//       try {
//         //Fetch för att hämta menyn
//         const response = await fetch(BASE_URL);
//         //Error om menyn inte hämtas
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu items");
//         }
//         //Konvertera svaret till Json och kontrollera att datan är en giltig array.
//         const data = await response.json();
//         if (!Array.isArray(data.menu)) {
//           throw new Error("Menu items data is not valid");
//         }
//         //Om hämtningen har gått bra, error = null
//         setMenuItems(data.menu);
//         setError(null);
//       } catch (error) {
//         setError(error);
//         console.error("Error fetching menu items:", error);
//         //Sätter isLoading till false, error eller menyn ska ha kommit nu.
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchMenuItems();
//   }, []);
//   //Retunerar en div tills hämtningen är klar.
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Something went wrong, please try again!</div>;
//   }
//  //Loopa igenom menuItems och rendera varje object
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
