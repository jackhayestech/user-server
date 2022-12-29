import { User } from "../user.model"
import { Uuid } from "../../../data/interfaces"

/**
 * Returns an user via the uuid
 * @param userUuid
 * @returns
 */
export const getByUuid = async (uuid: Uuid) => await User.findOne({ where: { uuid } })
