import IBlock from "./block/IBlock";

export default interface IFont extends IBlock {
  name: string
  family: string
  size: number
}