import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/block/homepage/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQs from "./Pages/FAQs";
import Resources from "./Pages/Resources";
import Save from "./Pages/Save";
import Axios from "./Pages/Axios";

function App() {
  return (
    <div className="bg-color-500 text-white p-2 rounded ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
