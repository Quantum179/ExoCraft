import IBlock from '../IBlock'

export default interface IMediaPlayer extends IBlock {
  medias: any //todo : trouver le bon type des médias
  currentMedia: any
  time: number
  // no children
}