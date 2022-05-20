import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../actions/users'
import Filter from './Filter'

const Users = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { users } = useSelector((state) => state.users)
    const [showUsers, setShowUsers] = useState([])

    useEffect(() => {
        if (users) setShowUsers(users)
    }, [users])

    const handleDelete = (user) => {
        if (window.confirm(`Voulez vous supprimer ${user.firstname} ?`)) {
            dispatch(deleteUser(user.id))
        }
    }

    return (
        <>
            <h3>Users</h3>
            <Filter setShowUsers={setShowUsers} />
            <table>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Parrain</th>
                        <th>Discord Tag</th>
                        <th>Telegram ID</th>
                        <th>Abonnement</th>
                    </tr>
                </thead>
                <tbody>
                    {showUsers.map((user) => (<tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{showUsers.find((u) => u.uuid === user.sponsor)?.discordID}</td>
                        <td>{user.discordID}</td>
                        <td>{user.telegramID}</td>
                        {user.subscriptions.length > 0 ? <td>✅</td> : <td>❌</td>}
                        <td><button onClick={() => handleDelete(user)}>Delete</button></td>
                        <td><button onClick={() => navigate(`/users/${user.id}`)}>View</button></td>
                        <td><button onClick={() => setCurrentId(user.id)}>Edit</button></td>
                    </tr>))}
                </tbody>
            </table>
        </>
    )
}

export default Users