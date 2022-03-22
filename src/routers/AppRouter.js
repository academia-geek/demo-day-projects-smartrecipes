import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from '../components/calendar/Calendar'
import Login from '../components/login/Login'
import Register from '../components/login/Register'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/calendar' element={<Calendar />} />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}

export default AppRouter