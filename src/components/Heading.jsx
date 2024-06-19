import "./Heading.css"

export default function Heading({children, ...options}) {
  return (
    <div className="s-heading">
      <hr className="s-heading-line"/>
      <h1 {...options} className="s-heading-main">{children}</h1>
      <hr className="s-heading-line-secondary"/>
    </div>
  )
}
