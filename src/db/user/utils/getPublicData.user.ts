import { User } from "../user.model"
import { PublicUserData } from "../../../data/interfaces"

/**
 * Returns the data for public consumption
 * @param user
 * @returns
 */
export const getPublicData = (user: User): PublicUserData => ({
  uuid: user.uuid,
  username: user.username,
})
