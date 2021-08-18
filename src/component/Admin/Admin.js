import React from 'react'
import AdminLogin from './AdminLogin/AdminLogin'
import AdminMainBoard from './AdminMainBoard/AdminMainBoard'
import './Admin.css';
export default function Admin({user,setUser}) {
    

    return (
        <div className="Admin">
            {!user ? <AdminLogin user={user} setUser={setUser}/> : <AdminMainBoard/>}
        </div>
    )
}
