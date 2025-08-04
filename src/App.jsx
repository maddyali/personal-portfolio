import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Data from "./Data";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import YoloPage from "./components/YoloPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home skills={Data.skills} />
      <About />
      <Portfolio projects={Data.projects} />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/yolo" element={<YoloPage />} />
    </Routes>
  );
}

export default App;
