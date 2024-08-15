import "./App.css";
import logo from "./assets/jpslogo.png";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Welcome">
          <p>Welcome to JPSGYM!</p>
          <p>
            Join JP's, visit for the day, and even invest in our merchandise
            below!
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
