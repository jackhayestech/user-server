import { Request } from "express"
import { ResponseData } from "@jh-tech/response-object"

import { CreateUserRequest } from "../../data/interfaces"
import { createUser } from "./createUser.controller"

/**
 * Route for creating the create event
 * @param req
 * @param res
 * @returns
 */
export const createUserRoute = async (req: Request<object, object, CreateUserRequest>, res: ResponseData) => {
  const data = req.body.data

  res.data = await createUser(data)

  return
}
