import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import LogementTitle from "../components/LogementTitle";

function Logement() {
  const { id } = useParams();

  return (
    <div className="container_main">
      <Carrousel key={`${id}_Carrousel`} logementId={id} />
      <LogementTitle key={`${id}_LogementTitle`} logementId={id} />
    </div>
  );
}

export default Logement; 