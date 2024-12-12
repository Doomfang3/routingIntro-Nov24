import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : { color: 'black' })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : { color: 'black' })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : { color: 'black' })}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/recipes'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : { color: 'black' })}
          >
            All Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
