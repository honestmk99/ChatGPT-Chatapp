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

const routes = [
  { path: "/", component: Home, showHeaderFooter: true },
  { path: "/chatgpt", component: Chatgpt, showHeaderFooter: false },
  { path: "/courses", component: Courses, showHeaderFooter: true },
  { path: "/faq", component: Faq, showHeaderFooter: true },
  { path: "/about", component: AboutUs, showHeaderFooter: true },
  { path: "/contact", component: ContactUs, showHeaderFooter: true },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PageWithHeaderFooter route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

function PageWithHeaderFooter({ route }) {
  const { component: Component, showHeaderFooter } = route;

  return (
    <div>
      {showHeaderFooter && (
        <>
          <Header />
          <Component />
          <Footer />
        </>
      )}
      {!showHeaderFooter && <Component />}
    </div>
  );
}

export default App;
