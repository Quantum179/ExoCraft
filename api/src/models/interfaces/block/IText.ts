import IBlock from "./IBlock"
import IFont from "../IFont"

export default interface IText extends IBlock {
  font: IFont
}