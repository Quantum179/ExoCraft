import * as Router from 'koa-router'

import docRouter from './doc'
import { addRouters } from '../utils/router'

const router = new Router({prefix: '/api/v1'})

addRouters(router, [
  docRouter
])

export default router

