function Banner(props) {
  return (
    <section className='banner'>
      <div className='banner_content'>
        <img className='banner_image' src={props.imageSrc} alt={props.imageAlt} />
        <span className='banner_title'>{props.text}</span>
      </div>
    </section>
  )
}

export default Banner