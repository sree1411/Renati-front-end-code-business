import { Route, Routes } from "react-router-dom" 
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"
import { Home } from "../components/Home"
import {Cart} from '../components/Cart'
import { Home1 } from "../components/Home1"
import { ProtectedRoutes } from "./ProtectedRoutes"


export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<SignUp/>} />

        {/* <Route path="/home1"  element={<Home1/>}/>
       <Route path="/cart"  element={<Cart/> } /> */}
       <Route path="/home1"  element={<ProtectedRoutes> <Home1/> </ProtectedRoutes>} />
       <Route path="/cart"  element={<ProtectedRoutes> <Cart/> </ProtectedRoutes>} />
      
      </Routes>
    </div>
  )
}

 
