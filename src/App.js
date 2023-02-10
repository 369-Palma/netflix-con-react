import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
