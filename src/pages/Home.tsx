import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import AboutMain from "../components/About/AboutMain";
import Frameworks from "../components/Frameworks/Frameworks";
import { Contact } from "../components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="page-container">
        <Title subtitle="About Me" title="Details" />
        <AboutMain />
        <Title subtitle="From Databases to VM-ware" title="Tools that I use" />
        <Frameworks />
        <Title subtitle="Contact Me" title="Get in touch" />
        <Contact />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
