import logo from './Screenshot 2023-07-14 at 8.06.34 AM.png';
import './App.css';
import Home from './Components/Pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p style={{ marginTop: '100px' }}>
        KEEG<code></code> & Family.
        </p>

        <a
          className="App-link"
          href="https://github.com/Keegan-Omel"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn More Here
        </a>
      </header>
    </div>
  );
}

export default App;
