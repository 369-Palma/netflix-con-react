import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Titoli from "./components/TitoliRiga";
import PhotoGallery from "./components/Galleria1";
import PhotoGallery2 from "./components/Riga2";
import PhotoGallery3 from "./components/Riga3";
function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Titoli title="Trending Now"></Titoli>
      <PhotoGallery></PhotoGallery>
      <Titoli title="Watch it Again"></Titoli>
      <PhotoGallery2></PhotoGallery2>
      <Titoli title="New Releases"></Titoli>
      <PhotoGallery3></PhotoGallery3>
      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
