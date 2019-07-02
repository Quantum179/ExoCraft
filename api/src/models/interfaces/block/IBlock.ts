import IStyle from "../IStyle"
import IEvent from "../IEvent"
import ISpacing from "../ISpacing"
import IDimension from "../IDimension"

export default interface IBlock {
  id: number
  children: IBlock[]
  dimension: IDimension
  spacing: ISpacing
  html: string
  css: IStyle // todo: utiliser les patrons de conception pour mieux définir le concept de thème et de scoped css
  events: IEvent[]

  addChild: (block: IBlock) => void
  setPosition: (x: number, y: number) => void
  setSize: (w: number, h: number) => void
  setSpacing: (margin: string, padding: string) => void
  // todo : actions rapide comme bgColor

  openStyleSettings: () => void // ouvre un dialog semblable à la console css du navigateur
  createClass: () => void
  addRule: (newRule: string) => void // -> this.css.isValidRule(newRule) -> this.css.addRule(new Rule(newRule))
  addClass: (newClass: string) => void // this.css.addClass(newClass)
}