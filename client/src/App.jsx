import { EthProvider } from "./contexts/EthContext";
// import Intro from "./components/Intro/";
// import Setup from "./components/Setup";
// import Demo from "./components/Demo";
// import Footer from "./components/Footer";
import Nav from "./components/navbar/navbar";
import "./App.css";
import "./styles/styles.css"
import Routing from "./Routing";
import "./pages/Marketplace"
import Marketplace from "./pages/Marketplace";



function App() {


  return (
    <EthProvider>
       {/* <Routing> */}
       

      <div id="App" >
        <Marketplace/>
        {/* <div className="container">

          <h1  style={{color: "white"}}>Welcome to CARBOGO</h1>
          <img className="Background" src="Images/Background.png" alt="" />
        
        </div> */}
      </div>
  
      {/* </Routing> */}
    </EthProvider>
  
  );

  
}

export default App;
