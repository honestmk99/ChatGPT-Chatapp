import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Plan from "./pages/plan";
import Footer from "./layouts/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
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
