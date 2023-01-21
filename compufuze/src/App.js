import logo from './Verbatim Banner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It all starts here and now...
        </p>
        <a
          className="App-link"
          href="https://github.com/scottynate05"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Chat
        </a>
      </header>
    </div>
  );
}

export default App;
