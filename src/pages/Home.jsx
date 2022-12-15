import Banner from "../components/Banner";
import "../styles/banner.css";
import bannerImage from "../assets/banner-home.png";
import LogementsGallery from "../components/LogementsGallery";
import '../styles/logementsGallery.css'

function Home() {
  return (
    <div>
      <Banner text={'Chez vous, partout et ailleurs'} imageSrc={bannerImage} imageAlt='ocean cliffs' />
      <LogementsGallery />
    </div>
  );
}

export default Home;