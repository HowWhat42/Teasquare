import dbConfig from '../utils/config.js'
import Sequelize from 'sequelize'

const config = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.DBPORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  dialectOptions: {
    connectTimeout: dbConfig.dialectOptions.connectTimeout
  }
})

export const db = {
    Sequelize,
    config
}