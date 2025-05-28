import React from 'react'
import { Link } from 'react-router'

function Navbar_component() {
  return (
    <>
    <nav className="bg-black text-white flex p-4 flex-wrap items-center gap-30">
      <div className="text-xl font-bold cursor-pointer"><img src="https://static.adultswim.com/2025-04/RaM-Logo-1400x423.png?w=1200" alt="" className='h-10 ml-15'/></div>
      <ul className="flex space-x-6 rtl:space-x-reverse rtl:flex-row flex-wrap gap-15">
        <Link to="/home">
        <li className="cursor-pointer hover:text-green-400 transition">Home</li>
        </Link>
        <Link to="/charecter">
         <li className="cursor-pointer hover:text-green-400 transition">Characters</li>
        </Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar_component