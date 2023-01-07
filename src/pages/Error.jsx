import "../styles/error.css"
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container_main">
      <section className="error">
        <h1 className="error_404">404</h1>
        <h2 className="error_message">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="error_link">Retourner sur la page d'accueil</Link>
      </section>
    </div>
  );
}

export default Error;