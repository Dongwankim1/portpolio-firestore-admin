import React, { useEffect } from 'react'
import AdminLogin from './AdminLogin/AdminLogin'
import AdminMainBoard from './AdminMainBoard/AdminMainBoard'
import './Admin.css';
export default function Admin({user,setUser}) {
    
    useEffect(()=>{
        console.log('asdfaef121qwfqwf2')
    },[])

    return (
        <div className="Admin">
            {!user ? <AdminLogin user={user} setUser={setUser}/> : <AdminMainBoard/>}
        </div>
    )
}
