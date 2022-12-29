import { IUser } from "./user.interface"
import { Uuid } from "./types"

// Request data for the create user route
export interface CreateUserRequest {
  data: IUser
}

// Get user request params
export interface GetUserParams {
  userUuid: Uuid
}
