import IProject from "./IProject"
import IPage from "./IPage"
import IUser from "./IUser"
import IBlock from "./block/IBlock"

export default interface IEditor {
  project: IProject
  currentPage: IPage
  currentUser: IUser

  addPage: (page: IPage) => void
  changePage: (id: number) => void
  addBlock: (block: IBlock, parent: IBlock | undefined) => void
  moveBlock: (block: IBlock) => void
  resizeBlock: (block: IBlock) => void //blocRef.setPosition(position) 
  saveBlock: (block: IBlock) => void
  changeDeviceView: () => void
  openThemeSettings: () => void
  loadProject: () => void // open projects list
  previewProject: () => void
  saveProject: () => void
}