import React from 'react'
import AdminLogin from './AdminLogin/AdminLogin'

export default function Admin({user,setUser}) {
    

    return (
        <div>
            {!user ? <AdminLogin user={user} setUser={setUser}/> : null}
        </div>
    )
}
