import { useParams } from "react-router-dom";
import { logementList } from "../data/logementList"
import Carrousel from "../components/Carrousel";
import LogementTitle from "../components/LogementTitle";
import Accordion from "../components/Accordion";

function Logement() {
  const { id } = useParams();
  const logement = logementList.filter((logement => logement.id === id));
  console.log(logement)

  return (
    <div className="container_main">
      <Carrousel key={`${id}_Carrousel`} logementId={id} />
      <LogementTitle key={`${id}_LogementTitle`} logementId={id} />
      <div className="container_details">
        <Accordion key={`${id}_LogementDescription`} title="Description" content={logement[0].description} />
        <Accordion key={`${id}_LogementEquipments`} title="Équipements" content={logement[0].equipments} />
      </div>
    </div>
  );
}

export default Logement; 