import React from 'react'
import { NavLink } from 'react-router'

const LogIn = () => {
  return (
    <div>
    <div className='bg-gray-300 w-full h-screen flex justify-center items-center'>
      <form className='bg-white w-auto h-auto p-6 space-y-4 rounded-md'>
        <h1 className='text-center text-4xl text-green-500 font-bold'>Login</h1>

        <div>
        <label className='text-gray-300 text-xl' htmlFor="email">Email</label>
        <input className='w-full rounded-md border-2 border-gray-300 px-4 py-2 ' type="email" id='email' />
        </div>

        <div>
        <label className='text-gray-300 text-xl' htmlFor="password">Password</label>
        <input className='w-full rounded-md border-2 border-gray-300 px-4 py-2 ' type="password" id='password' />
        </div>

        <button className='bg-blue-500 flex items-center justify-center rounded-md text-white px-4 py-2 w-full hover:bg-blue-600 text-xl'>Login</button>
        

        <h2 className='text-center text-blue-500 hover:underline font-semibold text-xl'>Forgotten Password ?</h2>

        <button className='bg-green-500 flex items-center justify-center text-white font-semibold w-full px-4 py-2 rounded-md hover:bg-green-600 text-xl'><NavLink to="/Signup">Create New Account</NavLink> </button>

      </form>
    </div>
    </div>
  )
}

export default LogIn