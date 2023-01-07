import React, { useState } from 'react';
import arrow from '../assets/arrow.png'

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(title)

  const isArray = Array.isArray(content);

  return (
    <div className="accordion_container">
      <div className="accordion_title">
        <h3>{title}</h3>
        <div className="accordion_arrow" onClick={() => setIsOpen(!isOpen)}>
          <img src={arrow} alt="flèche" className={isOpen ? "arrow" : "arrow_closed"} />
        </div>
      </div>
      <div className={isOpen ? "accordion_content" : "accordion_closed"}>
        {isArray ?
          <ul className="accordion_content-list">
            {content.map((equipment, index) => (
              <li key={index}>{`${equipment}`}</li>))}
          </ul>
          : <p key={title}>{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;