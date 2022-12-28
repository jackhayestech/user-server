import { Application, Request, Response } from "express"
import { routeSetup } from "@jh-tech/response-object"

import { logger } from "../utilities"
import { createUserRoute } from "./create-user/createUser.route"

/**
 * Creates the application routes.
 * @param app - the express application
 */
export const routes = (app: Application) => {
  // Create event route.
  app.route("/user").post((req: Request, res: Response) => routeSetup(req, res, createUserRoute, logger))
}
