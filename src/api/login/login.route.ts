import { Request } from "express"
import { ResponseData } from "@jh-tech/response-object"

import { CreateUserRequest } from "../../data/interfaces"
import { login } from "./login.controller"

/**
 * Route for logging the user in
 * @param req
 * @param res
 * @returns
 */
export const loginRoute = async (req: Request<object, object, CreateUserRequest>, res: ResponseData) => {
  const data = req.body.data

  res.data = await login(data)

  return
}
