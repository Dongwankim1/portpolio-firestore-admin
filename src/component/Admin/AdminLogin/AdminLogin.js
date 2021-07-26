import React,{useRef, useState,useEffect} from 'react';
import './AdminLogin.css';



export default function AdminLogin({setUser}) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    return (
        <div className="loginScreen">
        <div className="loginScreen__body">
           
                <div className="SigninScreen">
                <form>
                    <div className="font-mono text-3xl">Sign In</div>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" type="password"></input>
                    <button type="submit" >Sign In</button>
                    <h4></h4>
                </form>
            
            </div>
            
        </div>
      
    </div>
    )
}
