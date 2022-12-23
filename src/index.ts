import dotenv from "dotenv"
import express from "express"
import path from "path"

// Run the config before the imports for env access.
dotenv.config()

import { middleware } from "./middleware/middleware"
import { routes } from "./api/routes"
import { db } from "./db"

const app = express()
const port = process.env.PORT

// Initializes the db models and connection.
db()

// The file path to the open api yaml file for route validation.
const apiSpec = path.join(__dirname, "./data/application.openapi.yaml")

// Applies the middleware functions to the application.
middleware(app, apiSpec)

// Creates the routes for this application
routes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
