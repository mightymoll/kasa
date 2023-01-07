import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import { logementList } from "../data/logementList";


function Carrousel({ logementId }) {
  const [current, setCurrent] = useState(0);
  const logement = logementList.filter((logement => logement.id === logementId));

  const slides = logement[0].pictures
  const slidesTotal = slides.length
  console.log(slides)
  console.log(slidesTotal)

  const nextSlide = () => {
    setCurrent(current === slidesTotal - 1 ? 0 : current + 1)
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slidesTotal - 1 : current - 1)
  };

  return (
    <section className="carrousel">
      <div className="carrousel_images">
        {slides.map((picture, index) => (
          <div className={index === current ? 'image_active' : 'image_hidden'} key={index}>
            <img src={picture} alt={"photo de logement " + index} />
          </div>
        ))}
      </div>
      <div className="carrousel_controls">
        <div className="controls_prev" onClick={previousSlide}>
          <img src={arrow} alt="flèche précédente" />
        </div>
        <div className="controls_next" onClick={nextSlide}>
          <img src={arrow} alt="flèche suivant" />
        </div>
      </div>
      <p className="slide_index">{`${current + 1} / ${slidesTotal}`}</p>
    </section>
  )
};

export default Carrousel;