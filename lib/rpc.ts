import { hc } from "hono/client";

import { AppType } from "@/app/api/[[...route]]/route";

/**
 * Cliente RPC tipado para realizar llamadas a la API
 * @type {import("hono/client").HonoClient<AppType>}
 * @description Cliente generado usando Hono que proporciona tipos completos para todas las rutas de la API
 * @example
 * // Ejemplo de uso para login
 * const response = await client.api.auth.login.$post({
 *   json: { email: "user@example.com", password: "123456" }
 * });
 */
export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL!);
