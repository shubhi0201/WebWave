import Header from "./components/Header/Header";
import Home from "./components/Home/Main/Home";
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Cursor/>
      <Home />
      <Footer/>
    </>
  );
}

export default App;
