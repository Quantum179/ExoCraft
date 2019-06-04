import IBlock from "./block/IBlock"

export default interface IPage {
  id: number
  title: string
  height: number
  blocks: IBlock[] // todo : blocks ou seulement la grid initiale ?
}