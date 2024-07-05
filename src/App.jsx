import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Singnup } from "./pages/Singnup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/singup" element={<Singnup />} />
      </Routes>
    </>
  );
}

export default App;
