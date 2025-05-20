import { useState } from "react"

import { Sample } from "./components/Sample"

function App() {
const [count, setCount] =useState(0) 
//console.log(name)
const myName="Anandhi"
const myAge = 34
const myDept = "IT" 
const c =()=>{
}
  return (
    <>
      
      
       <h1> my react app</h1>

       <h1 className="text-3xl font-bold underline text-purple-600 "> hello </h1>
      
   {/*} <Sample myName = {myName} myAge = {myAge} myDept = {myDept} />*/}
    <button className="bg-amber-400 p-2" onClick={()=> setCount(count +1 )}> clickMe {count}</button>
    <Sample count= {count}/>
    </>
  )
} 
export default App
