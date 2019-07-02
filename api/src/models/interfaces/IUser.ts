import IBlock from "./block/IBlock"
import IProject from "./IProject"
import ITheme from "./ITheme";

export default interface IUser {
  username: string
  email: string
  password: string

  projects?: IProject[]
  themes?: ITheme[]
  blocks?: IBlock[]
}