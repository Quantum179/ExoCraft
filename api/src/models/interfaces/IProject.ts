import IPage from "./IPage"
import ITheme from "./ITheme"
import IUser from "./IUser"

export default interface IProject {
  id: number
  owner: IUser
  pages: IPage[]
  theme: ITheme
  lastModificationDate: Date //update when the project is saved or updated in editor

  addPage: (page: IPage) => void
  removePage: (page: IPage) => void
  changeTheme: (theme: ITheme) => void
}