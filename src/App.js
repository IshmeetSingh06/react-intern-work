import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HowToTrade from "./pages/howToTrade/HowToTrade";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HowToTrade />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
