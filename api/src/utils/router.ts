import * as Router from 'koa-router'

export const addRouters = (main: Router, routers: Router[]) => {
  routers.map(r => {
    main.use(r.routes())
    main.use(r.allowedMethods())
  })
}