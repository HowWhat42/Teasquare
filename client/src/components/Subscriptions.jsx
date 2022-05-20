import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteSubscription } from '../actions/subscriptions'

const Subscriptions = ({ id }) => {
    const dispatch = useDispatch()
    const { subscriptions, isLoading } = useSelector((state) => state.subscriptions)

    if (!subscriptions?.length && !isLoading) return 'No subscriptions'

    return (
        <div>
            <h2>Abonnements</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Durée</th>
                        <th>Date de début</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub) => (<tr key={sub.id}>
                        <td>{sub.name}</td>
                        <td>{sub.duration}</td>
                        <td>{sub.startDate}</td>
                        <td><button onClick={() => dispatch(deleteSubscription(sub.id))}>Delete</button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Subscriptions