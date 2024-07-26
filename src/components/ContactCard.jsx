import "./ContactCard.css"
import Card from "./Card.jsx"
import Button from "./Button"

export default function ContactCard ({imgSrc, children, buttonUrl, href}) {
  return (
    <Card>
      <div className="s-contact-card">
        <div className="s-contact-image">
          <img src={imgSrc} alt="platform"/>
        </div>

        <div className="s-contact-button">
          <Button url={buttonUrl ?? false} href={href}>{children}</Button>
        </div>
      </div>
    </Card>
  )
}
