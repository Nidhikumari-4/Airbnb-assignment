import "./App.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
