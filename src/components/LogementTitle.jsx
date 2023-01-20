import Rating from "../components/Rating"

/** refactor: 
 * use props from parent Logement.jsx instead of importing logementList.js
 */

function LogementTitle(props) {
  const tags = props.tags;
  const host = props.host;
  const rating = parseInt(props.rating);

  const hostName = host.name.split(' ');
  const hostFirstName = hostName[0];
  const hostLastName = hostName[1];

  return (
    <section className="title_container">
      <div className="title_container-main">
        <h1 className="logement_title">{props.title}</h1>
        <h2 className="logement_location">{props.location}</h2>
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