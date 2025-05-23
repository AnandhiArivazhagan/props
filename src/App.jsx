import { BrowserRouter , Routes, Route } from "react-router-dom"
import Dashboard from"./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/register"
import PageNotFound from "./pages/PageNotFound"

function App(){

  return (

    <BrowserRouter>
     <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={ <PageNotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
} 
export default App
