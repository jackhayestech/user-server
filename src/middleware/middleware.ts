import { Application, json } from "express"
import { Request, Response, NextFunction } from "express"
import { ValidationError } from "express-openapi-validator/dist/framework/types"
import { openApiValidation, openApiValidationError } from "@jh-tech/response-object"

import { logger } from "../utilities"

/**
 * Applies our custom middleware functions.
 * @param app - The express application we are applying the middleware functions to.
 */
export const middleware = (app: Application, apiSpec: string): void => {
  // Enables json request data.
  app.use(json())

  // Applies the swagger validation to the application.
  // app.use(openApiValidation(apiSpec))

  // If the swagger validation throws an error apply custom error.
  // app.use(
  //   (
  //     err: ValidationError,
  //     req: Request,
  //     res: Response,
  //     next: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
  //   ): void => openApiValidationError(err, req, res, logger)
  // )
}
