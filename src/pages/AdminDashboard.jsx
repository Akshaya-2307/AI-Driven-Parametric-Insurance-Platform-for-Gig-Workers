import { useMemo, useState } from 'react'
import { FiUsers, FiShield, FiCheckCircle } from 'react-icons/fi'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { adminUsers, adminAlerts } from '../services/mockData'

export default function AdminDashboard() {
  const [search, setSearch] = useState('')
  const filtered = useMemo(() => adminUsers.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())), [search])

  return (
    <div className="dashboard-grid">
      <Sidebar role="admin" />
      <div className="dashboard-content">
        <div className="dashboard-head">
          <div>
            <p className="eyebrow">Admin Analytics</p>
            <h1>Operations & Fraud Control</h1>
            <p className="subtitle">Monitor policies, claims processing, and suspicious signals.</p>
          </div>
          <div className="pill orange">Live Monitoring</div>
        </div>

        <div className="stats-row">
          <Card title="Total Users" value="4,820" icon={<FiUsers />} subtitle="Daily signups +12%" />
          <Card title="Active Policies" value="3,410" icon={<FiShield />} subtitle="Renewal rate 89%" />
          <Card title="Claims Processed" value="18,230" icon={<FiCheckCircle />} subtitle="Avg 11 hours turnaround" />
        </div>

        <section className="glass alert-card">
          <div className="section-head"><h3>Fraud Detection Alerts</h3><p>Highest priority warnings</p></div>
          <div className="alerts">
            {adminAlerts.map((alert) => (
              <article key={alert.id} className={`alert ${alert.level.toLowerCase()}`}>
                <p><strong>{alert.title}</strong></p>
                <small>{alert.time}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="glass table-card">
          <div className="section-head"><h3>User Table</h3><p>Search and filter active accounts.</p></div>
          <input className="search" placeholder="Search by name or email" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="table-wrap">
            <table>
              <thead><tr><th>Name</th><th>Email</th><th>Policy</th><th>Status</th></tr></thead>
              <tbody>
                {filtered.map((u) => <tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.policy}</td><td>{u.status}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
