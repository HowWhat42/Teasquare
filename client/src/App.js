import { Home, UserForm, UserDetails } from './containers'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Navigate to="/users" />} />
        <Route path='/users' exact element={<Home/>} />
        <Route path='/form/' exact element={<UserForm/>} />
        <Route path='/form/:id' exact element={<UserForm/>} />
        <Route path='/users/:id' element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
