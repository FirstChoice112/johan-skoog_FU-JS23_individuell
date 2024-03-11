import { useEffect, useState } from "react";

const BASE_URL =
  "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/{orderNr}";

export default function useFetchOrderNr() {
  const [error, setError] = useState(null);
  const [orderNr, setOrderNr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrderNr = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch orderNumber");
        }
        const data = await response.json();

        if (!data.success) {
          // Om success är false, sätt orderNr till null för att indikera att ingen beställning har hittats
          setOrderNr(null);
        } else {
          // Om success är true, uppdatera orderNr med ordernumret från API:et
          setOrderNr(data.eta);
        }
        setError(null);
      } catch (error) {
        setError(error);
        console.log("Error fetching order numbers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderNr();
  }, []);

  return { isLoading, error, orderNr };
}

// orderNr är det orderNr som returnerades när en beställning lades som antingen gäst eller inloggad användare
// {
//     "eta": 0
//   }
//   {
//     "success": true,
//     "error": "string"
//   }
