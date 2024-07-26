import "./LanguageCard.css"
import Card from "./Card.jsx"

export default function LanguageCard ({imgSrc, children}) {
  return (
    <Card>
      <div className="s-language-card">
        <div className="s-language-image">
          <img src={imgSrc} alt="language"/>
        </div>

        <div className="s-language-name">
          <h2>{children}</h2>
        </div>
      </div>
    </Card>
  )
}
