import AboutUs from "../components/sampleapp/AboutUs";
import ContactUs from "../components/sampleapp/ContactUs";
import Footer from "../components/sampleapp/Footer";
import Hero from "../components/sampleapp/Hero";
import Nav from "../components/sampleapp/Nav";
import Services from "../components/sampleapp/Services";
import Testimonials from "../components/sampleapp/Testimonials";
import { useDisclosure, Box } from "@chakra-ui/react";
import DrawerComponent from "../components/sampleapp/DrawerComponent";
import { useRef } from "react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
}

