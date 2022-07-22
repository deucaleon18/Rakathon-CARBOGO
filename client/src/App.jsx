import { EthProvider } from "./contexts/EthContext";
// import Intro from "./components/Intro/";
// import Setup from "./components/Setup";
// import Demo from "./components/Demo";
// import Footer from "./components/Footer";
import Nav from "./components/navbar/navbar";
import "./App.css";
import "./styles/styles.css"

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <img className="Background" src="Images/Background.png" alt="" />
        </div>
      </div>
      <Nav />
    </EthProvider>
  );
}

export default App;
