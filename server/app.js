import express from 'express'
import cors from 'cors'
import middleware from './utils/middleware.js'
import usersRoutes from './routes/users.routes.js'
import subscriptionsRoutes from './routes/subscriptions.routes.js'
import { db } from './config/db.js'
import Subscription from './models/subscriptions.model.js'
import User from './models/users.model.js'

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/users', usersRoutes)
app.use('/api/subscriptions', subscriptionsRoutes)
app.get('/api', (req, res) => {
    res.send('Welcome to TeaSquare API')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

db.config.authenticate()
db.config.sync({ force: false })
User.hasMany(Subscription)
Subscription.belongsTo(User)

export default app