import React, { useState } from 'react';
import arrow from '../assets/arrow.png';

/** refactor to use props : 
 * pictures[], coverImage, and title passed from parent (Logement.jsx)
 * coverImage is used if pictures array is empty
 */

function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const slidesTotal = props.pictures.length;

  console.log(slidesTotal)

  const nextSlide = () => {
    setCurrent(current === slidesTotal - 1 ? 0 : current + 1)
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slidesTotal - 1 : current - 1)
  };

  // don't show controls if only 1 image
  if (slidesTotal === 1 || slidesTotal === 0) {
    return (
      <section className="carrousel">
        <div className="carrousel_images">
          <div className="image_active">
            <img src={slidesTotal === 0 ? props.coverImage : props.pictures} alt={props.title} />
          </div>
        </div>
      </section>
    )
  }

  // background color + msg if no images exist
  if (slidesTotal === 0 && !props.coverImage) {
    return (
      <section className="carrousel">
        <div className="carrousel_images">
          <div className="image_placeholder">
            <p><strong>Sacre Bleu!</strong></p>
            <p>nous n'avons pas d'images de cette propriété</p>
          </div>
        </div>
      </section >
    )
  }

  // standard render :logement.pictures with arrow controls
  else {
    return (
      <section className="carrousel">
        <div className="carrousel_images">
          {props.pictures.map((picture, index) => (
            <div className={index === current ? 'image_active' : 'image_hidden'} key={index}>
              <img src={picture} alt={`${props.title} ${current + 1}`} />
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
  }
};

export default Carrousel;