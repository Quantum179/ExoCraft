import IProject from "./IProject"
import IPage from "./IPage"
import IUser from "./IUser"
import IBlock from "./block/IBlock"

export default interface IEditor {
  project: IProject
  currentPage: IPage
  currentUser: IUser
  selectedBlock: IBlock | null

  loadProject: () => void // ouvre un dialog
  saveProject: () => void // ouvre un dialog
  previewProject: () => void

  addPage: () => void // ouvre un dialog -> project.addPage(page) -> changePage(page)
  removePage: (page: IPage) => void // project.removePage(page)
  changePage: (page: IPage) => void // currentPage = page
  addBlock: () => void // ouvre un dialog -> *choix block* -> selectedBlock.addBlock(block) || drag/drop
  moveBlock: (block: IBlock) => void // drag -> selectedBlock.setPosition (x,y) -> drop
  resizeBlock: (block: IBlock) => void //blocRef.setSize(position) 
  saveBlock: (block: IBlock) => void //sauvegarde le bloc dans la collection de l'utilisateur

  changeDeviceView: (id: number) => void
  openThemeSettings: () => void // ouvre un dialog


}