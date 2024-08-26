import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {  
  const navigate = useNavigate()


  const handleRoute =() => {
    return navigate("/Forgot")
  }

  const handleLogin = () =>{
    return navigate("/Profile")
  } 

  return (
    <div className='w-full overflow-hidden md:flex md:flex-col md:items-center md:justify-around md:text-lg'> 
      
      <h2 className='w-full mt-20 text-center text-4xl font-bold'>Log in</h2>
      
      <form className='w-full mt-4 h-3/5 flex flex-col justify-around items-center md:w-3/5' onSubmit={(e)=>{
        e.preventDefault()
        handleLogin()
      }}>
      
        <label className="w-full ml-2 md:w-8/12">Email:<br/>
          <input type="email"  
              title="Email" 
              required
              onChange={(e)=>{}} 
              className="bg-slate-300 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 pl-4 h-14 rounded-md w-10/12 ml-7"/>
        </label>
      
        <label className="w-full ml-2 md:w-8/12">Password:<br/>
          <input type="password" title="Password" required className="bg-slate-300 h-14 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 pl-4 rounded-md w-10/12 ml-7"/>
        </label>
        
        <input type="submit" value="Login" className="mt-3 cursor-pointer bg-slate-900 text-lg pl-4 text-white w-2/3 h-14 mx-auto  rounded-md md:w-5/12" 
        onSubmit={(e)=>{
          e.preventDefault()
          handleLogin()
        }}/>
        </form>
        
        <div className='mt-4'>
          
          <p className="ml-4 w-full text-center">Forgot Your Password? <button onClick={handleRoute} className="text-slate-900 font-medium hover:underline hover:underline-offset-4">Click Here</button></p>
        
        </div>
  
  </div>
  )
}

export default Login
