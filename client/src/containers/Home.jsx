import { useState, useEffect } from 'react'
import { getUsers } from '../actions/users'
import { UserForm, Users } from '../components'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div>
            <h1>TeaSquare</h1>
            <UserForm currentId={currentId} setCurrentId={setCurrentId} />
            <Users setCurrentId={setCurrentId} />
        </div>
    )
}

export default Home