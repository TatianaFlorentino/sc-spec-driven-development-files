import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.text('Hello from Hono!'))

const port = Number(process.env.PORT || 3000)

serve(app, { port })

console.log(`Server listening on http://localhost:${port}`)
