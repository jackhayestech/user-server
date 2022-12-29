import { ServerError } from "@jh-tech/response-object"

import { IUser } from "../../data/interfaces"
import { User } from "../../db"
import { checkIfUserExists } from "./utils.createUser"

/**
 * Controller for creating an user.
 * @param data
 * @param userUuid
 * @returns
 */
export const createUser = async (data: IUser) => {
  const isUserExists = await checkIfUserExists(data.username)

  if (isUserExists) {
    const mess = `A username already exists with that name`
    throw new ServerError("createUser-userAlreadyExists", mess, 404, "User already exists", mess)
  }

  // Creates the event.
  const user = await User.make(data)

  return user.getPublicData()
}
