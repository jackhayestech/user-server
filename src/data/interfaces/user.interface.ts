// Base User interface
export interface IUser {
  username: string
  password: string
}

// User data for public consumption
export interface PublicUserData extends IUser {
  uuid: string
}

// Interface for User db object internal use only
export interface DbUser extends PublicUserData {
  id: number
}