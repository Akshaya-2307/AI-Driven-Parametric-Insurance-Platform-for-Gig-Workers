import { Link } from 'react-router-dom'
import { FiShield, FiTrendingUp, FiClock, FiDollarSign } from 'react-icons/fi'

export default function LandingPage() {
  return (
    <main className="page landing">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">AI-Powered Parametric Insurance</p>
          <h1>Insurance Built for Gig Workers, in Real Time.</h1>
          <p className="subtitle">Get dynamic risk protection and fast claims with AI underwriting, smart sensors, and real-time analytics.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/login">Start Free</Link>
            <Link className="btn btn-secondary" to="/login">Book Demo</Link>
          </div>
          <div className="feature-row">
            <div><FiShield /> Instant Claims</div>
            <div><FiTrendingUp /> Risk Insights</div>
            <div><FiClock /> 24/7 Support</div>
          </div>
        </div>
        <div className="hero-card glass">
          <div className="pill">Live Premium Update</div>
          <div className="hero-card-row"><strong>Risk Score</strong> 52</div>
          <div className="hero-card-row"><strong>Monthly Premium</strong> $359</div>
          <div className="hero-card-row"><strong>Coverage</strong> Active</div>
        </div>
      </section>
      <section className="features-grid">
        <article className="feature-tile glass"><FiDollarSign className="tile-icon" /><h3>Transparent Pricing</h3><p>Pay only for your usage and risk profile.</p></article>
        <article className="feature-tile glass"><FiShield className="tile-icon" /><h3>Parametric Triggers</h3><p>Automatic payouts when predefined events occur.</p></article>
        <article className="feature-tile glass"><FiClock className="tile-icon" /><h3>Fast Onboarding</h3><p>Set up your policy in under 2 minutes.</p></article>
      </section>
    </main>
  )
}
