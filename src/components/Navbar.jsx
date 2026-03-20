import { Link, NavLink } from 'react-router-dom'
import { FiMoon, FiSun, FiShield } from 'react-icons/fi'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar glass">
      <div className="brand">
        <span className="logo">⚡</span>
        <div>
          <p className="brand-title">Parametric Shield</p>
          <p className="brand-sub">Gig Insurance AI</p>
        </div>
      </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
          Login
        </NavLink>
        <Link className="cta" to="/login">Get Started</Link>
      </div>
      <button className="icon-btn" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  )
}
