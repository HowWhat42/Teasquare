import { useState, useEffect } from 'react'
import Field from '../components/Field'
import { createUser, updateUser, getUser } from '../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { v4 as uuid } from 'uuid'

const UserForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { user, users, isLoading } = useSelector((state) => state.users)
    const options = []
    if (users) users.map(user => options.push({ value: user.uuid, label: user.discordID }))
    const [userData, setUserData] = useState(user ? user : { uuid: '', firstname: '', lastname: '', sponsor: '', discordID: '', telegramID: '' })

    useEffect(() => {
        if (id) dispatch(getUser(id))
    }, [dispatch, id])

    if (isLoading) {
        return <div>
            <h1>Loading</h1>
        </div>
    }


    const handleSubmit = () => {
        const isUser = users.find(u => u.firstname === userData.firstname)
        if (isUser) {
            if (window.confirm(`${isUser.firstname} existe déjà, voulez vous le modifier?`)) {
                dispatch(updateUser(isUser.id, { ...userData }))
            }
        } else {
            const newUuid = uuid()
            dispatch(createUser({ ...userData, uuid: newUuid }, navigate))
        }
        clear()
    }

    const clear = () => setUserData({ uuid: '', firstname: '', lastname: '', sponsor: '', discordID: '', telegramID: '' })


    const handleSelect = (evt) => setUserData({ ...userData, sponsor: evt.value })

    return (
        <div className='if'>
            <div className='if-hero'>
                <h1 className='if-hero__title'>TeaSquare</h1>
                <h2 className='if-hero__topline'>Formulaire Copy Trading</h2>
            </div>
            <div className='if-form'>
                <div className='if-form__container'>
                    <div className='if-form__fields'>
                        <Field title={'Prénom'} value={userData.firstname} setValue={(evt) => setUserData({ ...userData, firstname: evt.target.value })} type={'text'} />
                        <Field title={'Nom'} value={userData.lastname} setValue={(evt) => setUserData({ ...userData, lastname: evt.target.value })} type={'text'} />
                        <Select className='if-form__select' inputValue={userData.sponsor} isClearable isSearchable options={options} onChange={handleSelect} />
                        <Field title={'Discord Tag'} value={userData.discordID} setValue={(evt) => setUserData({ ...userData, discordID: evt.target.value })} type={'text'} />
                        <Field title={'ID Télégram'} value={userData.telegramID} setValue={(evt) => setUserData({ ...userData, telegramID: evt.target.value })} type={'text'} />
                    </div>
                    <button className='if-button if-button__validate' onClick={() => handleSubmit()}>Envoyer</button>
                </div>
            </div>
        </div>
    )
}

export default UserForm