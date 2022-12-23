import { ServerError } from "@jh-tech/response-object"

/**
 * Creates an server error for db errors
 * @param e
 * @param code
 */
export const dbError = (e: Error, code: string): ServerError => {
  const mess = "An unexpected error has occurred please contact us for a resolution."
  const title = "Internal server error"
  return new ServerError(code, e, 500, title, mess)
}
