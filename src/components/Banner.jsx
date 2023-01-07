function Banner(props) {
  return (
    <section className='banner'>
      <img className='banner_image' src={props.imageSrc} alt={props.imageAlt} />
      <h1 className='banner_title'>{props.text}</h1>
    </section>
  )
}

export default Banner