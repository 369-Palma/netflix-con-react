import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Galleria from "./components/Galleria1";

function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Galleria title="Trending Now"></Galleria>
      <Galleria title="Watch it Again"></Galleria>
      <Galleria title="New Releases"></Galleria>

      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
