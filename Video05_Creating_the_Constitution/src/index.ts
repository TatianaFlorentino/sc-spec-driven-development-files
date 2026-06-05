import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.json({ message: 'Hello from AgentClinic' }))

const port = Number(process.env.PORT || 3000)

serve({ fetch: app.fetch, port })

console.log(`Server is running on http://localhost:${port}`)
