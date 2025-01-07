import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ToursCards from "./components/ToursCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Hero />
      <ToursCards />

      <Footer />
    </>
  );
};

export default App;
