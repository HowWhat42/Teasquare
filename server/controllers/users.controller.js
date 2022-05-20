import User from '../models/users.model.js'
import Subscription from '../models/subscriptions.model.js'

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({include: Subscription})

        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    const { id } = req.params

    try {
        const user = await User.findAll({ where: {id}})

        res.status(200).json(user[0])
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req, res) => {
    if (!req.body.firstname || !req.body.lastname) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    const user = req.body
        
    try {
        const newUser = await User.create(user)

        res.status(201).json(newUser)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updateUser = async (req, res) => {
    if (!req.body.firstname || !req.body.lastname) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }
    const { id } = req.params
    const user = req.body

    try {
        await User.update(user, { where: {id}})
        const updatedUser = await User.findAll({ where: {id}})

        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    const num = await User.destroy({ where: {id}})

    res.json({ message: `${num} User deleted successfully` })
}