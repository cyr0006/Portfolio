import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Chat from "./pages/Chat";
import Musings from "./pages/Musings";
import Projects from "./pages/Projects";
import ScrollToTop from "./hooks/linkScroll";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/musings" element={<Musings />} />
      </Routes>
    </Router>
  );
};

export default App;
