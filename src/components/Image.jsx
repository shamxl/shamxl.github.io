import "./Image.css"

export default function Image (options) {
  return (
    <div className="s-image-wrapper">
      <img className="s-image" src={options.src} alt={options.alt} />
    </div>
  )
}
