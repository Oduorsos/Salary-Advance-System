import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import HowItWork from "./pages/how-it-works";
import Solutions from "./pages/solutions";
import WhoWeServe from "./pages/who-we-serve";
import PartnersMarquee from "./Components/partnerships";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <PartnersMarquee />
      <Footer />
    </>
  );
}

export default App;
