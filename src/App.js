import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Map from "./pages/Map/Map";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/Map" element={<Map />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
