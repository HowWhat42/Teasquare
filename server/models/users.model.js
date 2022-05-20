import { db } from '../config/db.js'

const UserSchema = {
    uuid: {
        type: db.Sequelize.STRING
    },
    firstname: {
        type: db.Sequelize.STRING
    },
    lastname: {
        type: db.Sequelize.STRING
    },
    sponsor: {
        type: db.Sequelize.STRING
    },
    discordID: {
        type: db.Sequelize.STRING
    },
    telegramID: {
        type: db.Sequelize.STRING
    }
}

const User = db.config.define('users', UserSchema)

export default User