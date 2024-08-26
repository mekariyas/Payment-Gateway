import {useState} from 'react'
import { Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import AboutUs from './Components/AboutUS'
import NavBar from './Components/NavBar'
import Forgot from './Components/Forgot'
import CompanySignUp from './Components/CompanySignUp'
import Features from './Components/Features'


export default function App(){
    const [isVisible, setIsVisible ] = useState(true);
    
    const navbarVisibility= ()=>{
        setIsVisible(false)
    }
    return(
        <>
          <NavBar isVisible = {isVisible} />
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Login" element={<Login/>}/>
            <Route path="SignUp" element={<Signup/>}/>
            <Route path="Profile" element={<Profile navbarVisibility={navbarVisibility}/>}/>
            <Route path="About us" element={<AboutUs/>}/>
            <Route path="Forgot" element={<Forgot/>}/>
            <Route path="Company sign up" element={<CompanySignUp/>}/>
            <Route path="Features" element={<Features/>}/>
           </Routes>
       </>
    )
}
