import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router";
import "./styles/styles.scss";
import App from "./App.jsx";
import Tours from "./components/Tours.jsx";
import Navbar from "./components/Navbar.jsx";
import Contacts from "./components/Contacts.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tours" element={<Tours />}/>
      <Route path="/contacts" element={<Contacts />}/>

    </Routes>
  </BrowserRouter>
);
