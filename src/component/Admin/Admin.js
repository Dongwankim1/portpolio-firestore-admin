import React from 'react'
import AdminLogin from './AdminLogin/AdminLogin'

export default function Admin({user}) {


    return (
        <div>
            {!user ? <AdminLogin/> : null}
        </div>
    )
}
