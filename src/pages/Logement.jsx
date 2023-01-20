import { useParams, Routes, Route } from "react-router-dom";
import { logementList } from "../data/logementList"
import Carrousel from "../components/Carrousel";
import LogementTitle from "../components/LogementTitle";
import Accordion from "../components/Accordion";
import Error from "../pages/Error"

/** Carrousel props:
 * pass logement.cover image url to use if logement.pictures array is empty
*/

function Logement() {
  const { id } = useParams();
  const logement = logementList.filter((logement => logement.id === id));
  console.log(logement)

  if (logement.length === 0 || !logement) {
    return (
      <Routes>
        <Route path="/*" element={<Error />} />
      </Routes>)
  }

  else {
    return (
      <div className="container_main">
        <Carrousel key={`${id}_Carrousel`} pictures={logement[0].pictures} title={logement[0].title} coverImage={logement[0].cover} />
        <LogementTitle key={`${id}_LogementTitle`} title={logement[0].title} location={logement[0].location} tags={logement[0].tags} host={logement[0].host} rating={logement[0].rating} />
        <div className="container_details">
          <Accordion key={`${id}_LogementDescription`} title="Description" content={logement[0].description} />
          <Accordion key={`${id}_LogementEquipments`} title="Équipements" content={logement[0].equipments} />
        </div>
      </div>
    );
  }
}

export default Logement; 