import axios from "axios";

type TResponse = {
  isPending: boolean;
  error: null | unknown;
  data: null | any;
};

const api = axios.create();

export async function callAPI(
  method: "GET" | "PUT" | "POST",
  url: string,
  payload: Record<string, any> = {},
  timeout = 15000,
) {
  const response: TResponse = {
    isPending: false,
    error: null,
    data: null,
  };

  try {
    const { data } = await api({
      method,
      url,
      data: payload,
      signal: AbortSignal.timeout(timeout),
    });
    response.data = data;
  } catch (error) {
    response.error = error;
  } finally {
    response.isPending = false;
  }

  return response;
}
