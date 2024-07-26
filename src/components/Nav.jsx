import "./Nav.css"

export default function Nav ({children}) {
  return (
    <div className="s-nav-wrapper">
      <nav className="s-nav">
        <a className="s-nav-main" href="/">{children}</a>
        <a href="#contactme" className="s-nav-left">Contact Me</a>
      </nav>
    </div>
  )
}
