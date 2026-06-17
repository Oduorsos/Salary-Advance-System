import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./pages/home";
import Aboutus from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import Howitwork from "./pages/how-it-works";
import Solutions from "./pages/solutions";
import Whoweserve from "./pages/who-we-serve";
import PartnersMarquee from "./Components/partnerships";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/who-we-serve" element={<Whoweserve />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <PartnersMarquee />
      <Footer />
    </>
  );
}

export default App;
