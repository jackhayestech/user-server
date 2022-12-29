import { Request } from "express"
import { ResponseData } from "@jh-tech/response-object"

import { GetUserParams } from "../../data/interfaces"
// import { createUser } from "./createUser.controller"

/**
 * Route for creating the create event
 * @param req
 * @param res
 * @returns
 */
export const getUserRoute = async (req: Request<GetUserParams>, res: ResponseData) => {
  const userUuid = req.params.userUuid

  // res.data = await createUser(data)

  res.data = userUuid

  return
}
