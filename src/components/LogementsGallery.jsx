import { logementList } from "../data/logementList";
import { Link } from "react-router-dom";

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
              <h2 className='card_title'>{location}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </article >
  )
}

export default LogementsGallery