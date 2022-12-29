import { User } from "../../db"

export const checkIfUserExists = async (userName: string): Promise<boolean> => {
  const user = await User.getByUsername(userName)

  if (user) return true

  return false
}
