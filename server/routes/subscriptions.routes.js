import express from 'express'
import { getSubscriptionsByUserId, createSubscription, deleteSubscription } from '../controllers/subscriptions.controller.js'

const router = express.Router()

router.get('/:id', getSubscriptionsByUserId)
router.post('/', createSubscription)
router.delete('/:id', deleteSubscription)

export default router