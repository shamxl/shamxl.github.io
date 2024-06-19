import "./Button.css"

export default function Button({url, children, href}) {
  function onclick() {
    if (!href) {
      window.location.href = url
    }
  }
  return (
    <button onClick={onclick} href={href} className="s-button">{children}</button>
  )
}
