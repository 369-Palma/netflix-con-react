import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Titoli from "./components/TitoliRiga";
import PhotoGallery from "./components/Galleria1";

function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Titoli title="Trending Now"></Titoli>
      <PhotoGallery></PhotoGallery>
      <Titoli title="Watch it Again"></Titoli>
      <Titoli title="New Releases"></Titoli>

      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
