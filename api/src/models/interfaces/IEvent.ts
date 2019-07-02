import IPosition from "./IPosition";

export default interface IEvent {
  zone: IPosition
  type: IEventType,
  action: IEventAction
}

export enum IEventType {
  Hover,
  Click,
  Change,
}

export interface IEventAction {
  // todo : penser à une api qui permet de créer des events custom, en javascript
}

