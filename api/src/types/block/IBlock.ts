import IStyle from "../IStyle"
import IPosition from "../IPosition"
import IEvent from "../IEvent"
import ISpacing from "../ISpacing"

export default interface IBlock {
  id: number
  children: IBlock[]
  position: IPosition
  spacing: ISpacing
  html: string
  css: IStyle
  events: IEvent[]

  getChild: (index: number) => IBlock
  addChild: (block: IBlock) => void
  setPosition: (pos: IPosition) => void
  setSpacing: (spacing: ISpacing) => void
}