import ImgCarousel from "./components/carousel/ImgCarousel";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel /> 
      <Footer />
    </div>
  );
}

export default App;
