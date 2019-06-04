import * as Koa from 'koa'
import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser'

import router from './router'

const app = new Koa()
const port = process.env.PORT || 3000

// Configuration
app.use(cors())
app.use(bodyParser())

// Database 

// Router
app.use(router.routes())
app.use(router.allowedMethods())

// Run app
app.listen(port);
console.log('Server running on port : ' + port);