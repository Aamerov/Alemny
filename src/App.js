import NavbarC from "./components/NavbarC";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Success from "./pages/Success";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ComingSoon />} />
          <Route path="/success" element={<Success />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
