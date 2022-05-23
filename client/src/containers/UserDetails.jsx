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
        <div className='if'>
            <div className='if-hero'>
                <h1 className='if-hero__title'>TeaSquare</h1>
                <h2 className='if-hero__topline'>Détails Client</h2>
            </div>
            <div className='if-user'>
                <div className='if-user__details'>
                    <div className='if-user__details-info'>
                        <h2>Informations</h2>
                        <p>Prénom : {user.firstname}</p>
                        <p>Nom : {user.lastname}</p>
                        <p>Parrain : {users.find((u) => u.uuid === user.sponsor)?.discordID}</p>
                        <p>Tag Discord : {user.discordID}</p>
                        <p>ID Télégram : {user.telegramID}</p>
                        <Subscriptions />
                    </div>
                    <SubscriptionForm />
                </div>
                <h3>Filleuls</h3>
                <div className='if-user__affi'>
                    {!sponsors.length && <p>Aucun filleul</p>}
                    {sponsors.map((sponsor) => <div className='if-user__affi-box' key={sponsor.id}>
                        <p>{sponsor.discordID}</p>
                        <button className='if-button if-button__validate' onClick={() => navigate(`/users/${sponsor.id}`)}>Détails</button>
                    </div>)}
                </div>
                <button className='if-button if-button__error' onClick={() => navigate('/users')}>Retour</button>
            </div>
        </div>
    )
}

export default UserDetails