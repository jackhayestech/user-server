import { ServerError } from "@jh-tech/response-object"
import bcrypt from "bcrypt"

import { IUser } from "../../data/interfaces"
import { User } from "../../db"

/**
 * Controller for creating an user.
 * @param data
 * @param userUuid
 * @returns
 */
export const login = async (data: IUser) => {
  // Creates the event.
  const user = await User.getByUsername(data.username)

  // The user was not found with the provided uuid
  if (user === null) {
    const mess = `No user found with username ${data.username}`
    throw new ServerError("login-userNotFound", mess, 404, "User not found", mess)
  }

  // Checks if the provided password matches with the saved password
  const isCorrectPassword = await bcrypt.compare(data.password, user.password)

  // The provided password was incorrect
  if (!isCorrectPassword) {
    const mess = `Password was incorrect`
    throw new ServerError("login-incorrectPassword", mess, 401, "Incorrect password provided", mess)
  }

  return user.getPublicData()
}
