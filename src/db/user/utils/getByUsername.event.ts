import { User } from "../user.model"

/**
 * Returns an user via the uuid
 * @param userUuid
 * @returns
 */
export const getByUsername = async (username: string) => await User.findOne({ where: { username } })
