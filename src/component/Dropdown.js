import React from 'react';
import {Link} from 'react-router-dom';
export const Dropdown = ({isOpen,toggle}) => {
    return (
        <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-400'
          : 'hidden'
      }
      onClick={toggle}
    >
        <Link to='/' className='border-gray-200 p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          Home
        </Link>
        <Link to='/menu' className='border-gray-100 p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          Menu
        </Link>
        <Link to='/about' className='border-black-100 p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          About
        </Link>
        <Link to='/contact' className='border-gray-100 p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          Contact
        </Link>
      </div>
    )
}
