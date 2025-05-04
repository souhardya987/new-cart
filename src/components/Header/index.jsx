import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div>
      <nav className="flex justify-between items-center h-5 px-4 max-w-6xl mx-auto">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            REACT SHOPPING CART
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-gray-800 font-semibold">
          <li className="cursor-pointer list-none">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer list-none">
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default index
