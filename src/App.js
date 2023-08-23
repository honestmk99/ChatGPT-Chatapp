import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Chatgpt from "./pages/Chatgpt";
import Courses from "./pages/Courses";
import Faq from "./pages/Faq";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatgpt" element={<Chatgpt />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
