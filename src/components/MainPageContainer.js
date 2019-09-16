import AboutSection from "./HomePageContent/AboutSection";
import DropZoneSection from "./HomePageContent/DropZoneSection";
import PartnerSection from "./HomePageContent/PartnersSection";

const MainPageContainer = () => (
  <div className="container-fluid">
    <DropZoneSection />
    <PartnerSection />
    <AboutSection />
  </div>
);

export default MainPageContainer;
