import IBlock from './IBlock'

export default interface IGrid extends IBlock {
  // todo : override de block en grid item ou logic de validation interne ?
  setGap: (val: string) => void
  setAreas: (areas: string[]) => void
  setColumns: (nbCol: number) => void
  setRows: (nbRow: number) => void
}