import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Competitions from "./pages/Competitions/Competitions";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";
import ScrollToTop from "./components/scrollToTop";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
