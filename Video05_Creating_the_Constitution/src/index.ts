import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.json({ message: 'Hello from AgentClinic Tatiana' }))

const port = Number(process.env.PORT || 3000)

serve({ fetch: app.fetch, port })

console.log(`Server listening on http://localhost:${port}`)
