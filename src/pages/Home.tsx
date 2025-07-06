import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Frameworks from "../components/Frameworks/Frameworks";
import { Contact } from "../components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Languages" title="Title" />
        <Programs />
        <About />
        <Title subtitle="My Photos" title="Gallery" />
        <Frameworks />
        <Title subtitle="Contact Me" title="Get in touch" />
        <Contact />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
