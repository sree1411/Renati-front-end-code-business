
import { NavLink } from 'react-router-dom'

export const Header1 = () => {
  return (
    <nav>
    <div className="flex items-center justify-center space-x-10 rtl:space-x-reverse">
      <NavLink to="/home1" className="text-sm text-gray-500 dark:text-white hover:underline">
        🏠 Home
      </NavLink>
      <NavLink to="/cart" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
        🛒 Cart
      </NavLink>
    </div>
  </nav>
  )
}


