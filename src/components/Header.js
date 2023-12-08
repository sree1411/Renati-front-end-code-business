import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/busniessImage.jpg'

export const Header = () => {
  return (
  <>
  <header>
          <div className="headerpart"> Renati </div>
   </header>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} class="h-8" alt={Logo} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap company-name">Steel and Aluminum Business</span>
        </Link>
    </div>
</nav>
     
     
</nav>
</>
  )
}


