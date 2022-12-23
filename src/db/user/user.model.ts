import { Model, Optional } from "sequelize"

import { DbUser } from "../../data/interfaces"

type UserCreationAttributes = Optional<DbUser, "id">

/**
 * Represents the User db table
 */
export class User extends Model<DbUser, UserCreationAttributes> {
  declare id: number
  declare uuid: string
  declare username: string
  declare password: string
}
