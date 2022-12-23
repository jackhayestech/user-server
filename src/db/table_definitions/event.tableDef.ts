import { DataTypes, Sequelize } from "sequelize"

import { User } from ".."

export const userTable = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: new DataTypes.STRING(255),
      },
      username: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "user",
      underscored: true,
    }
  )
}
