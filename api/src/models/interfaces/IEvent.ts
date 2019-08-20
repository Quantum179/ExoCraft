import IDimension from "./IDimension"

export default interface IEvent {
  zone: IDimension
  type: IEventType,
  action: IEventAction
}

export enum IEventType {
  Hover,
  Click,
  Change,
  Drag,
  Drop
}

export interface IEventAction {
  type: IEventActionType
  // todo : penser à une api qui permet de créer des events custom, en javascript
}

export enum IEventActionType {
  Animation,
  Navigation,
  ShowHide,
  Execution
  // trouver d'autres
}