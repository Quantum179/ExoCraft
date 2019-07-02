import IBlock from './IBlock'
import IText from './IText';
import IIcon from './IIcon';

export default interface IButton extends IBlock {
  text?: IText
  icon?: IIcon
  
}