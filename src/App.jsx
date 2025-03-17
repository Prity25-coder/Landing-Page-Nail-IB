import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <div className="bg-neutral-100">
        <Navbar />
        <Home/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
