import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
  <Routes>
    <Route path="/" exact={true} element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>  
  )
}

export default App;
