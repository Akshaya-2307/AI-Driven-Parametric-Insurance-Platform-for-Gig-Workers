import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import NotFound from './pages/NotFound'
import Toast from './components/Toast'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : ''
  }, [darkMode])

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage setToast={setToast} />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </div>
  )
}

export default App
