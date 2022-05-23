import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../actions/users'
import Filter from './Filter'

const Users = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { users, isLoading } = useSelector((state) => state.users)
    const [showUsers, setShowUsers] = useState([])

    useEffect(() => {
        if (users) setShowUsers(users)
    }, [users])

    if (isLoading) {
        return <div>
            <h1>Loading</h1>
        </div>
    }

    const handleDelete = (user) => {
        if (window.confirm(`Voulez vous supprimer ${user.firstname} ?`)) {
            dispatch(deleteUser(user.id))
        }
    }

    return (
        <div className='if-users'>
            <div className='if-users__search'>
                <Filter setShowUsers={setShowUsers} />
                <button className='if-button if-button__edit' onClick={() => navigate(`/form/`)}>Ajouter</button>
            </div>


            {showUsers.map((user) => (<div className='if-users__row' key={user.id}>
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
                <p>{showUsers.find((u) => u.uuid === user.sponsor)?.discordID}</p>
                <p>{user.discordID}</p>
                <p>{user.telegramID}</p>
                {user.subscriptions.length > 0 ? <p>✅</p> : <p>❌</p>}
                <button className='if-button if-button__validate' onClick={() => navigate(`/users/${user.id}`)}>Détails</button>
                <button className='if-button if-button__edit' onClick={() => navigate(`/form/${user.id}`)}>Modifier</button>
                <button className='if-button if-button__error' onClick={() => handleDelete(user)}>Supprimer</button>
            </div>))}
        </div>
    )
}

export default Users