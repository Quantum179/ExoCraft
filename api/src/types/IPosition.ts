export default interface IPosition {
  type : ITypePosition
  x: number
  y: number
  w: number
  h: number
}

export enum ITypePosition {
  Relative,
  Absolute
}