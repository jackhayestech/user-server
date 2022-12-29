import { Application, Request, Response } from "express"
import { routeSetup } from "@jh-tech/response-object"

import { logger } from "../utilities"
import { createUserRoute } from "./create-user/createUser.route"
import { getUserRoute } from "./get-user/getUser.route"
import { loginRoute } from "./login/login.route"

/**
 * Creates the application routes.
 * @param app - the express application
 */
export const routes = (app: Application) => {
  // Create user route.
  app.route("/user").post((req: Request, res: Response) => routeSetup(req, res, createUserRoute, logger))

  // Get user route
  app.route("/user/:userUuid").get((req: Request, res: Response) => routeSetup(req, res, getUserRoute, logger))

  // Login route
  app.route("/login").post((req: Request, res: Response) => routeSetup(req, res, loginRoute, logger))
}
