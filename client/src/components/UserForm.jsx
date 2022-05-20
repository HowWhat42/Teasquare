import { useState, useEffect } from 'react'
import Field from './Field'
import { createUser, updateUser } from '../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { v4 as uuid } from 'uuid'

const UserForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ uuid: '', firstname: '', lastname: '', sponsor: '', discordID: '', telegramID: '' })
    const navigate = useNavigate()
    const user = useSelector((state) => currentId ? state.users.users.find((user) => user.id === currentId) : null)
    const { users } = useSelector((state) => state.users)

    useEffect(() => {
        if (user) setUserData(user)
    }, [user])

    const handleSubmit = () => {
        const isUser = users.find(u => u.firstname === userData.firstname)
        if (isUser) {
            if (window.confirm(`${isUser.firstname} existe déjà, voulez vous le modifier?`)) {
                dispatch(updateUser(isUser.id, { ...userData }))
                setCurrentId(null)
            }
        } else {
            const newUuid = uuid()
            dispatch(createUser({ ...userData, uuid: newUuid }, navigate))
        }
        clear()
    }

    const clear = () => setUserData({ uuid: '', firstname: '', lastname: '', sponsor: '', discordID: '', telegramID: '' })

    const options = []
    if (users) {
        console.log(users)
        users.map(user => options.push({ value: user.uuid, label: user.discordID }))
    }
    const handleSelect = (evt) => setUserData({ ...userData, sponsor: evt.value })

    return (
        <div>
            <h3>Add new user</h3>
            <Field title={'Prénom'} value={userData.firstname} setValue={(evt) => setUserData({ ...userData, firstname: evt.target.value })} type={'text'} />
            <Field title={'Nom'} value={userData.lastname} setValue={(evt) => setUserData({ ...userData, lastname: evt.target.value })} type={'text'} />
            <Select inputValue={userData.sponsor} isClearable isSearchable options={options} onChange={handleSelect} />
            <Field title={'Discord Tag'} value={userData.discordID} setValue={(evt) => setUserData({ ...userData, discordID: evt.target.value })} type={'text'} />
            <Field title={'ID Télégram'} value={userData.telegramID} setValue={(evt) => setUserData({ ...userData, telegramID: evt.target.value })} type={'text'} />
            <div>
                <button onClick={() => handleSubmit()}>add</button>
            </div>
        </div>
    )
}

export default UserForm