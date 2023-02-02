import logo from './VerbatimBanner.jpg';
import styled from "styled-components";
import './App.css';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const sayHello = () => {
  alert('You now owe $25, our \'Specialized\' team of collections agents have been dispatched. Godspeed...');
}

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
          Let's Chat, The Future Is Waiting!
        </a>
        <Button onClick={sayHello}>
          $25 per Click
        </Button>
      </header>
    </div>
  );
}

export default App;
