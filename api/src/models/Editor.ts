import IEditor from "./interfaces/IEditor";
import IProject from "./interfaces/IProject";
import IPage from "./interfaces/IPage";
import IUser from "./interfaces/IUser";
import IBlock from "./interfaces/block/IBlock";

export default class Editor implements IEditor{
  project: IProject
  currentPage: IPage
  selectedBlock: IBlock | null

  constructor() {
    
  }

  loadProject = () => {
    //todo
  }

  saveProject = () => {
    //todo 
  }

  previewProject = () => {
    
  }

  openPageSettings //todo
  : () => void;

  addPage = () => {
    //todo : open dialog and await result
    const page = {} as IPage
    this.project.addPage(page)
    this.changePage(page)
  }

  changePage = (page: IPage) => {
    this.currentPage = page
    // refresh
  } 

  removePage = (page: IPage) => {

  }

  addBlock = () => {
    // open dialog
    const block = {} as IBlock
  }

  moveBlock = (block: IBlock) => {
    
  }

  resizeBlock = (block: IBlock) => {

  }

  saveBlock = (block: IBlock) => {
    // save block in user's block library
  }
}
