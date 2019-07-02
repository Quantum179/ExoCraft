export default interface IDimension {
  type : IPositionType
  x: number
  y: number
  w: number
  h: number
}

export enum IPositionType {
  Relative,
  Absolute
}