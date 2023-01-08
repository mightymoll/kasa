function Banner(props) {
  return (
    <section className="banner">
      <img className="banner_image" src={props.imageSrc} alt={props.imageAlt} />
      <div className="banner_title">
        <h1>{props.text}</h1>
      </div>
    </section>
  )
}

export default Banner