import * as Router from 'koa-router'
import { getReadMe } from './handlers'

const router = new Router({prefix: '/doc'})

router.get('/readme', getReadMe)

export default router

