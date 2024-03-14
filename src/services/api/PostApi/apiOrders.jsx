// import React from "react";

// import { useEffect, useState } from "react";

// function MyComponent() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
// const sendOrderToAPI = async (orderDetails) => {
//   try {
//     const response = await fetch(
//       "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderDetails),
//       }
//     );
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error);
//     }

//     return data; // Return the response data
//   } catch (error) {
//     console.error("Error sending order:", error);
//     throw error; // Throw the error to be caught by the calling function
//   }
// };

// // Testa funktionen
// (async () => {
//   try {
//     const orderDetails = {
//       /* Lägg till dina orderuppgifter här */
//     };
//     const responseData = await sendOrderToAPI(orderDetails);
//     console.log("Response Data:", responseData);
//     // Testa om responseData innehåller förväntade värden
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();
// async function testSendOrderToAPI() {
//   try {
//     // Skapa ett fiktivt orderobjekt för teständamål
//     const orderDetails = {
//       details: {
//         order: [
//           {
//             name: "Test Item",
//             price: 20,
//           },
//         ],
//       },
//     };

//     // Skicka ordern till API:et och vänta på svar
//     const responseData = await sendOrderToAPI(orderDetails);

//     // Logga svaret från API:et
//     console.log("Response Data:", responseData);
//   } catch (error) {
//     // Hantera eventuella fel som kan uppstå
//     console.error("Error:", error);
//   }
// }

// // Komponenten där du testar din funktion
// function TestComponent() {
//   // Anropa testfunktionen när komponenten renderas
//   React.useEffect(() => {
//     testSendOrderToAPI();
//   }, []);

//   return <div>Testing sendOrderToAPI...</div>;
// }
// export default TestComponent;
// export default function Cart({ cartItems }) {
//   const handleCheckout = async () => {
//     try {
//       if (!cartItems || cartItems.length === 0) {
//         console.log("Empty cart. No items to checkout.");
//         return;
//       }

//       // Aggregate cart items into a single order
//       const orderDetails = {
//         details: {
//           order: cartItems.map((item) => ({
//             name: item.title,
//             price: item.price,
//           })),
//         },
//       };

//       // Send the order to the API
//       const responseData = await sendOrderToAPI(orderDetails);

//       // Extract eta and orderNr from the response
//       const { eta, orderNr } = responseData;

//       // Do something with eta and orderNr, such as displaying them to the user
//       console.log("Response Data:", responseData); // Output response data
//       console.log("Eta:", eta);
//       console.log("Order Number:", orderNr);
//     } catch (error) {
//       // Handle any errors that occur during the process
//       console.error("Error during checkout:", error);
//     }
//   };
// }
//       try {
//         const requestBody = {
//           details: {
//             order: [
//               {
//                 name: "Example Item",
//                 price: 10,
//               },
//             ],
//           },
//         };

//         const response = await fetch(
//           "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(requestBody),
//           }
//         );

//         const data = await response.json();
//         console.log("Response Data:", data);
//         if (!response.ok) {
//           throw new Error(data.error);
//         }

//         setResponseData(data);
//         console.log("Response Data:", data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!responseData) {
//     return null;
//   }

//   return (
//     <div>
//       <h2>Response Data:</h2>
//       <pre>{JSON.stringify(responseData, null, 2)}</pre>
//     </div>
//   );
// }

// export default MyComponent;

// {
//     "details": {
//       "order": [
//         {
//           "name": "string",
//           "price": 0
//         }
//       ]
//     }
//   }
// {
//     "eta": 0,
//     "orderNr": "string"
//   }
// {
//     "success": true,
//     "error": "string"
//   }
