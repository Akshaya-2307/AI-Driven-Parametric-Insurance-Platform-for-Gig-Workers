import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Loader from '../components/Loader'

const initial = { email: '', password: '', role: 'user' }

export default function LoginPage({ setToast }) {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const validate = () => {
    if (!form.email || !form.password) {
      setError('Please fill email and password.')
      return false
    }
    if (!form.email.includes('@')) {
      setError('Please provide a valid email.')
      return false
    }
    setError('')
    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToast(`Welcome ${form.role === 'admin' ? 'Admin' : 'User'}!`)
      if (form.role === 'admin') navigate('/dashboard/admin')
      else navigate('/dashboard/user')
    }, 850)
  }

  return (
    <main className="page login-page">
      <section className="login-panel glass">
        <div>
          <p className="eyebrow">Secure Access</p>
          <h1>Sign in to Parametric Shield</h1>
          <p className="subtitle">One login for both users and admins with role-based dashboards.</p>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <label>Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} placeholder="you@gigplatform.com" />
          <label>Password</label>
          <input type="password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} placeholder="••••••••" />
          <label>Role</label>
          <select value={form.role} onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {error && <p className="error">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>{loading ? <Loader /> : 'Login'}</Button>
        </form>
      </section>
    </main>
  )
}
