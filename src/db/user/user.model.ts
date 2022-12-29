import { Model, Optional } from "sequelize"

import { DbUser, PublicUserData } from "../../data/interfaces"
import { make, getPublicData, getByUuid } from "./utils"

type UserCreationAttributes = Optional<DbUser, "id">

/**
 * Represents the User db table
 */
export class User extends Model<DbUser, UserCreationAttributes> {
  declare id: number
  declare uuid: string
  declare username: string
  declare password: string

  /**
   * Static methods
   */
  /**
   * Creates a new instance of the event db
   */
  static make = make

  /**
   * Finds an event by uuid
   */
  static getByUuid = getByUuid

  /**
   * Returns the data from a event that can be consumed by api's outside this api
   * @returns
   */
  getPublicData = (): PublicUserData => getPublicData(this)
}
