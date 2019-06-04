import * as Koa from 'koa'

export const getReadMe = (ctx : Koa.Context, next: Function) => {
  ctx.body = "Hello doc"
  next()
}