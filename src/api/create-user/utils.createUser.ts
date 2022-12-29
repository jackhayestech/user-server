import { User } from "../../db"

/**
 * Checks if a user exists by the username
 * @param userName
 * @returns
 */
export const checkIfUserExists = async (userName: string): Promise<boolean> => {
  const user = await User.getByUsername(userName)

  if (user) return true

  return false
}
