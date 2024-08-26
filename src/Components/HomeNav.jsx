import { NavLink } from "react-router-dom"
import Hamburger from '../assets/Hamburger.png'
import { useState } from "react"


export default function HomeNav(){
    const [display,setDisplay] =  useState(false)
    const HandleDisplay = () => {
      setDisplay(display=> !display)
    }
    return(
      <>
      <ul className={`${display?"block " :"hidden "} absolute w-3/5 z-[1] top-14 right-0 h-lvh bg-gradient-to-tr from-slate-950 to-slate-600 flex flex-col justify-evenly overflow-y-scroll items-center text-white  md:w-9/12 md:static md:flex md:flex-row md:justify-around md:items-center md:h-12 md:bg-none md:mr-4 md:space-x-2 md:text-lg md:overflow-hidden`}>
            <li className="w-full h-9 flex  items-center md:">
              <NavLink to="/" className={` w-full text-center hover:border-[1px] transition-border  ease-in-out duration-1000 delay-75  hover:border-white h-full py-1 md:hover:rounded-[15px]`}
              style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }}>Home</NavLink>
            </li>
            <li className="w-full h-9 flex  items-center">
              <NavLink to="About us" className={` w-full text-center hover:border-[1px] transition-border  ease-in-out duration-1000 delay-75 hover:border-white h-full py-1 md:hover:rounded-[15px]`}
               style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }}>About</NavLink>
            </li>
            <li className="w-full h-9 flex  items-center ">
              <NavLink to="Features"
               style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }} className={` w-full text-center hover:border-[1px]  transition-border  ease-in-out duration-1000 delay-75 hover:border-white h-full py-1 md:hover:rounded-[15px]`}>Features</NavLink>
            </li>
            <li className="w-full h-9 flex  items-center">
              <NavLink to="Company sign up" className={` w-full text-center hover:border-[1px] transition-border  ease-in-out duration-1000 delay-75 hover:border-white h-full py-1 md:hover:rounded-[15px]`}
               style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }}>Company</NavLink>
            </li>
            <li className="w-full h-9 flex  items-center">
              <NavLink to="SignUp" className={` w-full text-center hover:border-[1px] transition-border  ease-in-out duration-1000  hover:border-white h-full py-1 md:hover:rounded-[15px]`}
               style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }}>Sign up</NavLink>
            </li>
            <li className="w-full h-9 flex  items-center ">
              <NavLink to="Login" className={` w-full text-center hover:border-[1px] transition-border  ease-in-out duration-1000 delay-75 hover:border-white h-full py-1 md:hover:rounded-[15px]`}
               style={({isActive})=>{
                return isActive ? {border: '1px solid white',
              background: `rgb(2,6,3,0.4)`,
              borderRadius: `15px`}: {}
              }}>Log in</NavLink>
            </li>
          </ul>
          <div className="mr-3 relative hover:cursor-pointer z-10 md:hidden" onClick={HandleDisplay}>
            <img src={Hamburger} alt="Hamburger-Menu"
            className="w-5 h-5 object-cover relative"/>
          </div>
      </>
    )
  }