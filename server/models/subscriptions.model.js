import { db } from '../config/db.js'

const SubscriptionSchema = {
    userId: {
        type: db.Sequelize.INTEGER
    },
    name: {
        type: db.Sequelize.STRING
    },
    startDate: {
        type: db.Sequelize.DATE
    },
    duration: {
        type: db.Sequelize.INTEGER
    }
}

const Subscription = db.config.define('subscriptions', SubscriptionSchema)

export default Subscription