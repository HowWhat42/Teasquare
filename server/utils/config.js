/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT,
  HOST: process.env.DBHOST,
  DBPORT: process.env.DBPORT,
  USER: process.env.DBUSER,
  PASSWORD: process.env.DBPASSWORD,
  DB: process.env.DBNAME,
  dialect: "mariadb",
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    connectTimeout: 60000
  }
}