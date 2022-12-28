import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt"

import { User } from "../user.model"
import { IUser } from "../../../data/interfaces"
import { dbError } from "../../util.db"

/**
 * Creates an user
 * @param data
 * @returns
 */
export const make = async (data: IUser): Promise<User> => {
  const userData = { ...data, uuid: uuidv4() }

  // Creates salt for the password
  const salt = await bcrypt.genSalt(10)

  // Encrypts password
  userData.password = await bcrypt.hash(data.password, salt)

  let user
  try {
    user = await User.create(userData)
  } catch (e) {
    throw dbError(e as Error, "db-userModel-make")
  }

  return user
}
