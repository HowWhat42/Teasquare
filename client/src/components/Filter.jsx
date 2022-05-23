import { useState } from 'react'
import { useSelector } from 'react-redux'

const Filter = ({ setShowUsers }) => {
  const [search, setSearch] = useState('')
  const { users } = useSelector((state) => state.users)

  const onSearch = (evt) => {
    setSearch(evt.target.value)
    if (!evt.target.value) return setShowUsers(users)
    const filteredUsers = users.filter((user) => user.firstname.toLowerCase().includes(evt.target.value.toLowerCase()))
    if (filteredUsers.length) {
      setShowUsers(filteredUsers)
    } else {
      setShowUsers([])
    }
  }
  return <input className='if-form__field' placeholder='Rechercher' value={search} onChange={onSearch} />
}

export default Filter