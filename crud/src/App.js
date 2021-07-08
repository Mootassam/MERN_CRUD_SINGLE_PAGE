import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
