import { useEffect, useState } from "react";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const requestBody = {
          details: {
            order: [
              {
                name: "Example Item",
                price: 10,
              },
            ],
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

        setResponseData(data);
        console.log("Response Data:", data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!responseData) {
    return null;
  }

  return (
    <div>
      <h2>Response Data:</h2>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;

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
