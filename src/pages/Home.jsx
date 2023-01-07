import Banner from "../components/Banner";
import bannerImage from "../assets/banner-home.png";
import LogementsGallery from "../components/LogementsGallery";

function Home() {
  return (
    <div className="container_main">
      <Banner text={'Chez vous, partout et ailleurs'} imageSrc={bannerImage} imageAlt='ocean cliffs' />
      <LogementsGallery />
    </div>
  );
}

export default Home;