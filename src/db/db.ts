import { Sequelize } from "sequelize"

import { userTable } from "./table_definitions"

export const db = async () => {
  const sequelize = new Sequelize(process.env.DB_URL as string, { dialect: "mysql" })

  await sequelize.authenticate()

  // Initializes event table
  userTable(sequelize)
}
