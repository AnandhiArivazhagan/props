//import {Link} from "react-router-dom"
//import DashBoard from "./Register"
import { useState } from "react"
import Input from "costuminputg"
const Register=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handileSubmit=()=>{
          e.preventDefault()
          console.log(username)
         console.log(email)
          console.log(password)
          setEmail("")
          setPassword("")
          setUsername("")
    }
return(
    <center>
    <div className="item-center justify w-150 h-full mt-50 bg-gray-100">
        <form onSumbit={handileSubmit}>
          <Input
        type='username'
        label='username'
        placeholder='User Name'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
         <Input
        type='number'
        label='Phone NUmber'
        placeholder='enter your number'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <Input
        type='email'
        label='Email address'
        placeholder='Email address'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
        type='password'
        label='password'
        placeholder='Enter your password'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <Input
        type='password'
        label=' Confirm password'
        placeholder='Re enter the password'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className='bg-blue-200 w-full mt-4' type='submit'>Sign in</button>
        </form>
    </div>
    </center>
)
}
export default Register