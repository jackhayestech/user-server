import { IUser } from "../../data/interfaces"
import { User } from "../../db"

/**
 * Controller for creating an user.
 * @param data
 * @param userUuid
 * @returns
 */
export const createUser = async (data: IUser) => {
  // TODO check if user name exists

  // Creates the event.
  const user = await User.make(data)

  return user.getPublicData()
}
