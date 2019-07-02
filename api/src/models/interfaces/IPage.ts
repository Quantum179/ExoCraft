import IBlock from "./block/IBlock"

export default interface IPage {
  id: number
  title: string
  height: number
  blocks: IBlock[]
}