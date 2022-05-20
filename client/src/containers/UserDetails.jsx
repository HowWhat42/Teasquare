import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions/users'
import { getSubscriptions } from '../actions/subscriptions'
import { SubscriptionForm, Subscriptions } from '../components'

const UserDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { user, users, isLoading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUser(id))
        dispatch(getSubscriptions(id))
    }, [dispatch, id])

    if (!user) return null

    if (isLoading) {
        return <div>
            <h1>Loading</h1>
        </div>
    }

    const sponsors = users.filter(({ sponsor }) => sponsor === user.uuid)

    return (
        <div>
            <h1>Client {user.id}</h1>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>Parrain {users.find((u) => u.uuid === user.sponsor)?.discordID}</p>
            {sponsors.map((sponsor) => <div key={sponsor.id}>
                <p>Filleul {sponsor.discordID}</p>
                <button onClick={() => navigate(`/users/${sponsor.id}`)}>Détails</button>
            </div>)}
            <p>{user.discordID}</p>
            <p>{user.telegramID}</p>
            <SubscriptionForm />
            <Subscriptions />

            <button onClick={() => navigate('/users')}>Back</button>
        </div>
    )
}

export default UserDetails