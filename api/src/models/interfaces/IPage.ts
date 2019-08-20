import IBlock from "./block/IBlock"

export default interface IPage extends IBlock {
  id: number
  title: string
}