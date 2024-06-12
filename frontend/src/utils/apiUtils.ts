import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create();

export const useCallAPI = (
  method: "GET" | "PUT" | "POST",
  url: string,
  payload: Record<string, any> = {},
  timeout = 15000,
) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    if (!method || !url) {
      setError("Invalid request.");

      return;
    }

    async function callAPI() {
      try {
        setIsPending(true);

        const { data } = await api({
          method,
          url: `/api/${url}`,
          data: payload,
          signal: AbortSignal.timeout(timeout),
        });

        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(JSON.stringify(err));
        }
      } finally {
        setIsPending(false);
      }
    }

    callAPI();
  }, [method, url, payload, timeout]);

  return {
    isPending,
    error,
    data,
  };
};
