function Banner(props) {
  return (
    <section className='banner'>
      <div className='banner_container'>
        <img className='banner_image' src={props.imageSrc} alt={props.imageAlt} />
        <h1 className='banner_title'>{props.text}</h1>
      </div>
    </section>
  )
}

export default Banner