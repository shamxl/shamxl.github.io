import "./Card.css"


export default function Card ({children}) {
  return (
    <div className="s-card-container">
      {children}
    </div>
  )
}
