import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HowToTrade from "./pages/howToTrade/HowToTrade";
import Download from "./pages/donwload/download"
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaqPage from "./pages/faq/FaqPage";
import Copyright from "./components/copyright/copyright";
import About from "./pages/about/About";
import Refund from "./pages/refund/Refund"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HowToTrade />} />
        <Route path="download" element={<Download />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="about" element={<About />} />
        <Route path="refund" element={<Refund />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
}
export default App;
