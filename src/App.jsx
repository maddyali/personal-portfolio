import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Data from "./Data";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
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
}

export default App;
