import { useCallback } from "react";

export const useHttp = () => {
  const BASE_URL = process.env.NEXT_APP_FETCH_TEMPLATE;
  const request = useCallback(
    async (
      path = "",
      method = "GET",
      body: string | null = null,
      headers = {
        "Content-Type": "application/json",
        accepts: "application/json",
      }
    ) => {
      try {
        const response = await fetch(`${BASE_URL}${path}`, {
          method,
          body,
          headers,
        });
        const data = await response.json();

        if (!response.ok) {
          throw (
            data.message ||
            `Could not fetch ${BASE_URL}${path}, status: ${response.status}`
          );
        }

        return data;
      } catch (e) {
        throw e;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { request };
};
