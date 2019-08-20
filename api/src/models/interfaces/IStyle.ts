export default interface IStyle {
  classes: IClass[]
  rules: CSSRule[]
  margin: string
  padding: string

  isValidRule: (rule: {}) => boolean // todo : déplacer au bon endroit dans l'application, méthode static 
  addRule: (rule: CSSRule) => void
  addClass: (newClass: IClass) => void
}

export interface IClass {
  name: string
  rules: CSSRule[]
}