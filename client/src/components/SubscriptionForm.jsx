import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Field from './Field'
import { createSubscription } from '../actions/subscriptions'

const SubscriptionForm = () => {
    const dispatch = useDispatch()
    const [subscriptionData, setSubscriptioData] = useState({ userId: '', name: '', startDate: new Date(), duration: 30 })
    const { id } = useParams()

    const handleSubmit = () => {
        dispatch(createSubscription({ ...subscriptionData, userId: id }))
        clear()
    }

    const clear = () => setSubscriptioData({ userId: '', name: '', startDate: new Date(), duration: 30 })

    return (
        <div>
            <h2>Formulaire Abonnement</h2>
            <Field title={"Nom de l'abonnement"} value={subscriptionData.name} setValue={(evt) => setSubscriptioData({ ...subscriptionData, name: evt.target.value })} type={'text'} />
            <Field title={'Date de début'} value={subscriptionData.startDate} setValue={(evt) => setSubscriptioData({ ...subscriptionData, startDate: evt.target.value })} type={'date'} />
            <Field title={'Durée'} value={subscriptionData.duration} setValue={(evt) => setSubscriptioData({ ...subscriptionData, duration: evt.target.value })} type={'number'} />
            <div>
                <button onClick={() => handleSubmit()}>add</button>
            </div>
        </div>
    )
}

export default SubscriptionForm