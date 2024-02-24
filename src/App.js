import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import HeroSection from "./components/home/HeroSection";
import './index.css';
import TaxPayerDetail from "./pages/TaxPayerDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/tax-payers" element={<TaxPayerDetail/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/terms-and-conditions" element={<Terms />}/>
          <Route path="/privacy-policy" element={<Privacy />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
