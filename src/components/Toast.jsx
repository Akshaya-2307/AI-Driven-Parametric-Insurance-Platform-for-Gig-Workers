export default function Toast({ message, onClose }) {
  return (
    <div className="toast">
      <div>
        <p className="toast-title">Success</p>
        <p>{message}</p>
      </div>
      <button className="close" onClick={onClose}>×</button>
    </div>
  )
}
