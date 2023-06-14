import "./App.css";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import NavbarOffCanva from "./components/common comoponents/Navbar";
import Footer from "./components/common comoponents/Footer";
import SrollToTOp from "./components/common comoponents/SrollToTOp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SrollToTOp/>
        <NavbarOffCanva />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
