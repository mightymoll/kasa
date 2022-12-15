import { logementList } from "../data/logementList";
import { Link } from "react-router-dom";
import "../styles/logementsGallery.css";


function LogementsGallery() {
  return (
    <article className='logements_gallery-container' >
      <ul className='logements_gallery'>
        {logementList.map(({ id, cover, title, location }) => (
          <li key={id} className='card_container'>
            <Link to={'logement/' + id}>
              <div className='card_img'>
                <img src={cover} alt={title} />
              </div>
              <div className='card_title'>
                <h2>{location}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article >
  )
}

export default LogementsGallery