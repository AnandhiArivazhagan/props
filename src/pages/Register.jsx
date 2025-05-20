import React from 'react'
import{Link, useNavigate} from"react-router-dom"

import Login from './Login' 
export const Register = () => {
     const navigate = useNavigate()
    const handleClick = () =>{
        console.log("Handle click function called")
        navigate("/login")
    }
  return (
    <div>
    <div>this is my register page</div>
    <button onClick={handleClick} >Login</button>

</div>
  )
}

export default Register