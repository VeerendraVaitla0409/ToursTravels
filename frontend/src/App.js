import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "animate.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Header from './Travels/Header'
import Footer from './Travels/Footer'
import Routing from './Travels/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />

    </div>

  );
}

export default App;
