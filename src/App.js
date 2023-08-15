import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Plan from "./pages/plan";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
