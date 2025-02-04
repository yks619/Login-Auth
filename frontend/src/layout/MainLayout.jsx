import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <header>
            <nav className='bg-slate-600 w-full '>
                <ul className='flex justify-center items-center gap-4 text-2xl text-white p-6'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="signup">SignUp</NavLink></li>
                    <li><NavLink to="login">LogIn</NavLink></li>
                
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout