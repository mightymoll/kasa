import { logementList } from "../data/logementList";
import Rating from "../components/Rating"
import '../styles/logementStyles.css';

function LogementTitle({ logementId }) {
  const logement = logementList.filter((logement => logement.id === logementId));

  const tags = logement[0].tags;
  const host = logement[0].host;
  const rating = parseInt(logement[0].rating);

  const hostName = host.name.split(' ');
  const hostFirstName = hostName[0];
  const hostLastName = hostName[1];

  return (
    <section className="title_container">
      <div className="title_container-main">
        <h1>{`${logement[0].title}`}</h1>
        <h2>{`${logement[0].location}`}</h2>
        <ul className="title_tags">
          {tags.map((tag, index) => (
            <li key={`${index}`} className="tag">
              <p>{`${tag}`}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="title_container-sub">
        <div className="host">
          <div className="host-name">
            <p>{`${hostFirstName}`}</p>
            <p>{`${hostLastName}`}</p>
          </div>
          <div className="host-image">
            <img src={`${host.picture}`} alt={`${host.name}`} />
          </div>
        </div>
        <Rating etoiles={rating} />
      </div>
    </section >
  )
};

export default LogementTitle;