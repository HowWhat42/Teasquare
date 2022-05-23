import { useEffect } from 'react'
import { getUsers } from '../actions/users'
import { Users } from '../components'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className='if'>
            <div className='if-hero'>
                <h1 className='if-hero__title'>TeaSquare</h1>
                <h2 className='if-hero__topline'>Liste parrainage</h2>
            </div>
            <Users />
        </div>
    )
}

export default Home