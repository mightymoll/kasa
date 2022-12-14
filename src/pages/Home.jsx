import Banner from "../components/Banner";
import "../styles/banner.css";
import bannerImage from "../assets/banner-home.png"

function Home() {
  return (
    <Banner text={'Chez vous, partout et ailleurs'} imageSrc={bannerImage} imageAlt='ocean cliffs' />
  );
}

export default Home;