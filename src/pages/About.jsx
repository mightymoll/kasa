import Banner from "../components/Banner";
import "../styles/banner.css";
import bannerImage from "../assets/banner-about.png"

function About() {
  return (
    <Banner text={''} imageSrc={bannerImage} imageAlt='mountains' />
  );
}

export default About;