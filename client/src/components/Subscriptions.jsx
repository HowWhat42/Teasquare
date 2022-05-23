import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteSubscription } from '../actions/subscriptions'
import { format, addDays } from 'date-fns'

const Subscriptions = () => {
    const dispatch = useDispatch()
    const { subscriptions, isLoading } = useSelector((state) => state.subscriptions)

    return (
        <div className='if-user__subs'>
            <h3>Abonnements</h3>
            {!subscriptions?.length && !isLoading && <p>Pas d'abonnement</p>}
            {subscriptions.map((sub) => (<div className='if-user__subs-row' key={sub.id}>
                <p>{sub.name}</p>
                <p>{format(new Date(sub.startDate), 'dd/MM/yyyy')}</p>
                <p>{format(addDays(new Date(sub.startDate), sub.duration), 'dd/MM/yyyy')}</p>
                <p><button className='if-button if-button__error' onClick={() => dispatch(deleteSubscription(sub.id))}>Supprimer</button></p>
            </div>))}
        </div>
    )
}

export default Subscriptions