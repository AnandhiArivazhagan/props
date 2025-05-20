import image from "../assets/image.jpg";
import Login from "./Login"

const PageNotFound = () => {
   
  return (
    <div>
        <h1> this page is not found</h1>
        <img className="w-full" src={image} alt="404" />

           <Link to ="/login">Login</Link>
    </div>
  )
}
export default PageNotFound