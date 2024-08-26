import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center justify-around overflow-hidden md:text-lg'>
      <h2 className='w-full mt-24 text-center font-bold text-4xl'>Sign Up</h2>
      <form className='w-full  mt-4 pb-10 h-3/5 flex flex-col justify-around items-center md:text-lg md:w-3/5'
      onSubmit={(e)=>{
        e.preventDefault()
        return navigate('/Profile')
      }}>
        <label htmlFor="First Name" className="w-full ml-2 md:w-8/12">First Name:<br/>
          <input type='text' required title="First Name" className="bg-slate-300 pl-4 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 rounded-md w-10/12 ml-7"/>
        </label>
        <label htmlFor="Last Name" className="w-full ml-2 md:md:w-8/12">Last Name:<br/>
          <input type='text' required title="Last Name" className="bg-slate-300 pl-4 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 rounded-md w-10/12 ml-7"/>
        </label>
        <label htmlFor="Phone Number" className="w-full ml-2 md:w-8/12">Phone Number:<br/>
          <input type="tel" required title="Phone Number" className="bg-slate-300 pl-4 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 rounded-md w-10/12 ml-7"/>
        </label>
        <label  htmlFor="Email" className="w-full ml-2 md:w-8/12">Email:<br/>
          <input type="email" required title="Email" className="bg-slate-300 pl-4 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 rounded-md w-10/12 ml-7"/>
        </label>
        <label  htmlFor="Password" className="w-full ml-2 md:w-8/12">Password:<br/>
          <input type="Password" required title="Password" className="bg-slate-300  pl-4 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 rounded-md w-10/12 ml-7"/>
        </label>
        <input type="submit" value="Sign Up" className="mt-3 cursor-pointer  bg-slate-900 text-lg pl-4 text-white w-2/3 h-14 mx-auto  rounded-md md:w-5/12"/>
     </form>
    </div>
  )
}

export default Signup
