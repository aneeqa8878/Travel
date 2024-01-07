import Navbar from "./components/Navbar";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import England from "./components/England";
import Footer from "./components/Footer";
import Header from './components/Header';
import Packages from './components/Packages';
import Shop from './components/Shop';
import About from './components/About';
import Pages from './components/Pages';
import News from './components/News';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/england" element={<England />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
