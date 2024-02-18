import "./App.css";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
