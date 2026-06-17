import { Routes, Route } from "react-router-dom";

import navbar from "./components/navbar";
import home from "./pages/home";
import aboutus from "./pages/about-us";
import contactUs from "./pages/contact-us";
import howitwork from "./pages/how-it-works";
import solutions from "./pages/solutions";
import whoweserve from "./pages/who-we-serve";
import partnersMarquee from "./Components/partnerships";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <navbar />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about-us" element={<aboutus />} />
        <Route path="/contact-us" element={<contactUs />} />
        <Route path="/how-it-works" element={<howitwork />} />
        <Route path="/who-we-serve" element={<whoweserve />} />
        <Route path="/solutions" element={<solutions />} />
      </Routes>
      <partnersMarquee />
      <Footer />
    </>
  );
}

export default App;
