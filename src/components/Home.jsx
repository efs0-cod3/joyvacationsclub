import Footer from "./Footer";
import Hero from "./Hero";
import Modal from "./Modal";
import ToursCards from "./ToursCards";
import WhatsAppButton from "./WhatsAppButton";

const HOME = () => {
  return (
    <>
      <Modal />
      <Hero />
      <ToursCards />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HOME;
