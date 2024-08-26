import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
        <div className='w-full md:flex md:flex-col md:items-center md:justify-around md:text-lg'>
            <h2 className='w-full mt-20 text-center text-4xl font-bold'>Forgot Password</h2>
            <p className="mt-2">Enter the Email address you used to Sign up.</p>
            <form className='w-full mt-10 h-3/5 flex flex-col justify-around items-center md:w-3/5'>
                <label htmlFor='Email'  className="w-full ml-2 md:w-8/12">Email:<br/>
                    <input type="email" required title="Email" className="bg-slate-300 focus:invalid:outline focus:invalid:outline-red-600 focus:invalid:outline-2 pl-4 h-14 rounded-md w-10/12 ml-7"/>
                </label>
                <input type="submit" value="Submit" className="mt-3 cursor-pointer h-14 bg-slate-900 text-lg pl-4 text-white w-2/3  mx-auto  rounded-md  md:w-5/12"/>
            </form>
            <div className='mt-4 w-full text-center'>Go to<Link to='/'className="text-slate-900 font-medium hover:underline hover:underline-offset-4"> Homepage</Link></div>
      </div>
  )
}

export default Forgot
