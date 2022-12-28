import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";
import { logementList } from "../data/logementList";

function Logement() {
  const { id } = useParams();
  return (
    <Carrousel key={id} logementId={id} slides={[logementList.pictures]} />
  );
}

export default Logement;