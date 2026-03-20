import { AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { FiShield, FiTrendingUp, FiCheckCircle, FiFileText } from 'react-icons/fi'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { riskTrend, userClaims } from '../services/mockData'

export default function UserDashboard() {
  return (
    <div className="dashboard-grid">
      <Sidebar role="user" />
      <div className="dashboard-content">
        <div className="dashboard-head">
          <div>
            <p className="eyebrow">User Dashboard</p>
            <h1>Gig Worker Risk Snapshot</h1>
            <p className="subtitle">Personal risk analytics and coverage status updated in real time.</p>
          </div>
          <div className="pill green">Active Coverage</div>
        </div>

        <div className="stats-row">
          <Card title="Current Risk" value="52" icon={<FiShield />} subtitle="Lower than 30-day average" />
          <Card title="Weekly Premium" value="$413" icon={<FiTrendingUp />} subtitle="Based on risk and location" />
          <Card title="Coverage" value="Active" icon={<FiCheckCircle />} subtitle="Policy valid through 2030" />
          <Card title="Recent Claims" value="3" icon={<FiFileText />} subtitle="All claims in progress" />
        </div>

        <section className="chart-card glass">
          <div className="section-head"><h3>Risk and Premium Trend</h3><p>Updated weekly</p></div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={riskTrend} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="risk" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7f5af0" stopOpacity={0.28}/><stop offset="95%" stopColor="#7f5af0" stopOpacity={0}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.35} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="risk" stroke="#7f5af0" fillOpacity={1} fill="url(#risk)" />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <section className="table-card glass">
          <div className="section-head"><h3>Recent Claims</h3><p>Latest updates</p></div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Claim ID</th><th>Date</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {userClaims.map((c) => <tr key={c.id}><td>{c.id}</td><td>{c.date}</td><td>{c.type}</td><td>{c.amount}</td><td>{c.status}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
