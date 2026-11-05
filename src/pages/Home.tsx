import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import AboutMain from "../components/About/AboutMain";
import ToolsCarousel from "../components/ToolsCarousel/ToolsCarousel";
import { Contact } from "../components/Contact/Contact";
import Horizon from "../components/Horizon/Horizon";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="page-container">
        <Title subtitle="About Me" title="Details" />
        <AboutMain />
        <Title subtitle="From Databases to VM-ware" title="Tools that I use" />
        <ToolsCarousel />
      </div>
      <Horizon />
      <div className="page-container">
        <Title subtitle="Contact Me" title="Get in touch" />
        <Contact />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
