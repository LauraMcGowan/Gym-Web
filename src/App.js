import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to JPSGYM!</p>
        <p>
          Join JP's, visit for the day, and even invest in our merchandise
          below!
          <li>
            Day pass £7.50 Weekly pass £20 Monthly membership standard £35
            NHS/blue light membership £30 Off shore yearly discount!!
          </li>
        </p>
      </header>
    </div>
  );
}

export default App;
