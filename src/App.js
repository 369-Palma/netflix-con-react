import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Titoli from "./components/TitoliRiga";
import PhotoGallery from "./components/Galleria1";
/* import PhotoGallery2 from "./components/Riga2";
import PhotoGallery3 from "./components/Riga3"; */
function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Titoli title="Trending Now"></Titoli>
      <PhotoGallery titolo="Harry%20Potter"></PhotoGallery>
      <Titoli title="Watch it Again"></Titoli>
      <PhotoGallery titolo="Orphan%20Black"></PhotoGallery>
      <Titoli title="New Releases"></Titoli>
      <PhotoGallery titolo="The%20Lord%20of%20the%20ring"></PhotoGallery>
      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
