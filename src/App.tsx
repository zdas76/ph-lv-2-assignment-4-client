import BenefitsSection from "./components/home/BenefitsSection";
import CategorySection from "./components/home/CategorySection";
import FeaturedProduct from "./components/home/FeaturedProduct";
import HeroSection from "./components/home/HeroSection";
import ImageGalerry from "./components/home/ImageGalerry";

function App() {
  return (
    <div className="px-2">
      <HeroSection />
      <CategorySection />
      <FeaturedProduct />
      <BenefitsSection />
      <ImageGalerry />
    </div>
  );
}

export default App;
