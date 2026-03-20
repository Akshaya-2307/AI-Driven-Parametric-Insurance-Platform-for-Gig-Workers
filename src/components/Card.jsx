export default function Card({ title, value, icon, subtitle, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-top">
        <div className="card-icon">{icon}</div>
        <div className="card-meta">
          <p className="card-title">{title}</p>
          <p className="card-value">{value}</p>
        </div>
      </div>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {children}
    </div>
  )
}
