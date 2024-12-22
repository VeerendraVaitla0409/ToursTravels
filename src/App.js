import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "animate.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Travels/Header'
import Home from './Travels/Components/Home'
import About from './Travels/Components/About'
import Packages from './Travels/Components/Packages'
import Services from './Travels/Components/Services'
import ContactUs from './Travels/Components/ContactUs'
import Footer from './Travels/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;
