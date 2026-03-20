import { NavLink } from 'react-router-dom'
import { FiShield, FiPieChart, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function Sidebar({ role }) {
  const items = role === 'admin'
    ? [
      { to: '/dashboard/admin', label: 'Overview', icon: <FiPieChart /> },
      { to: '/dashboard/admin', label: 'Users', icon: <FiUsers /> },
      { to: '/dashboard/admin', label: 'Fraud', icon: <FiShield /> },
      { to: '/dashboard/admin', label: 'Analytics', icon: <FiTrendingUp /> },
    ]
    : [
      { to: '/dashboard/user', label: 'Overview', icon: <FiPieChart /> },
      { to: '/dashboard/user', label: 'Claims', icon: <FiShield /> },
      { to: '/dashboard/user', label: 'Policies', icon: <FiUsers /> },
      { to: '/dashboard/user', label: 'Insights', icon: <FiTrendingUp /> },
    ]

  return (
    <aside className="sidebar glass">
      <div className="sidebar-head">
        <p>Quick Access</p>
      </div>
      <div className="sidebar-items">
        {items.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
