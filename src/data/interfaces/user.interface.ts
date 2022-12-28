import { Uuid } from "./types"

// Base User interface
export interface IUser {
  username: string
  password: string
}

// User data for public consumption
export interface PublicUserData {
  uuid: Uuid
  username: string
}

// Interface for User db object internal use only
export interface DbUser extends IUser {
  uuid: Uuid
  id: number
}
