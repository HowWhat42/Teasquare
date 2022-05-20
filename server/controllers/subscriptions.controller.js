import Subscription from '../models/subscriptions.model.js'
import { db } from "../config/db.js"
const Op = db.Sequelize.Op

export const getSubscriptionsByUserId = async (req, res, next) => {
    const { id } = req.params

    try {
        const user = await Subscription.findAll({ where: {userId: {[Op.like]: id}}})

        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const createSubscription = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    const sub = req.body
        
    try {
        const newSub = await Subscription.create(sub)

        res.status(201).json(newSub)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const deleteSubscription = async (req, res) => {
    const { id } = req.params
    const num = await Subscription.destroy({ where: {id}})

    res.json({ message: `${num} Subscription deleted successfully` })
}