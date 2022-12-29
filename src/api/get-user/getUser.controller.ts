import { ServerError } from "@jh-tech/response-object"

import { Uuid } from "../../data/interfaces"
import { User } from "../../db"

/**
 * Controller for returning an user.
 * @param data
 * @param userUuid
 * @returns
 */
export const getUser = async (userUuid: Uuid) => {
  // Creates the user.
  const user = await User.getByUuid(userUuid)

  // The user was not found with the provided uuid
  if (user === null) {
    const mess = `No user found with uuid ${userUuid}`
    throw new ServerError("getUser-userNotFound", mess, 404, "User not found", mess)
  }

  return user.getPublicData()
}
