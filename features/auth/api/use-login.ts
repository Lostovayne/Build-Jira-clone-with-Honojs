import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.login)["$post"]>;

export const useLogin = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (data) => {
      try {
        if (!data || !data.json) {
          throw new Error("Invalid login data");
        }

        const response = await client.api.auth.login.$post({
          json: data.json,
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        return response.json();
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
    mutationKey: ["login"],
  });
  return mutation;
};
