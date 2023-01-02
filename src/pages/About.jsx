import Banner from "../components/Banner";
import "../styles/banner.css";
import bannerImage from "../assets/banner-about.png"
import Accordion from "../components/Accordion";

function About() {

  return (
    <div className="container_main">
      <Banner text={''} imageSrc={bannerImage} imageAlt='mountains' />
      <div className="container_about">
        <Accordion key="1" title="Fiabilité" content="" />
        <Accordion key="2" title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Accordion key="3" title="Service" content="" />
        <Accordion key="4" title="Responsibilité" content="" />
      </div>
    </div>
  );
}

export default About;