import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar flex flex-row items-center justify-evenly h-20 my-5 mx-auto'>
        <div className="left-nav flex">
            <div className="nav-name font-bold">
                Pratyush Jain
            </div>
        </div>
        <div className="right-nav flex justify-between">
            <div className="nav-home">
                Home
            </div>
            <div className="nav-projects">
                Projects
            </div>
            <div className="nav-resume">
                Resume
            </div>
        </div>
    </div>
  )
}

export default NavBar