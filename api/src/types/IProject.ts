import IPage from "./IPage"
import ITheme from "./ITheme"
import IUser from "./IUser"

export default interface IProject {
  id: number
  owner: IUser
  pages: IPage[]
  theme: ITheme
  lastModificationDate: Date
}