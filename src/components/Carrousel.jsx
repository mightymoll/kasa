import React, { useState } from 'react';
import previous from '../assets/arrow-previous.png';
import next from '../assets/arrow-next.png';
import '../styles/carrousel.css';
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
      <div className="carrousel_container">
        <div className="carrousel_images">
          {slides.map((picture, index) => (
            <div className={index === current ? 'image_active' : 'image_hidden'} key={index}>
              <img src={picture} alt={"photo de logement " + index} />
            </div>
          ))}
        </div>
        <div className="carrousel_controls">
          <div className="arrow" onClick={previousSlide}>
            <img src={previous} alt="flèche précédente" />
          </div>
          <div className="arrow" onClick={nextSlide}>
            <img src={next} alt="flèche suivant" />
          </div>
        </div>
        <p className="slide_index">{`${current + 1} / ${slidesTotal}`}</p>
      </div>
    </section >
  )
};

export default Carrousel;