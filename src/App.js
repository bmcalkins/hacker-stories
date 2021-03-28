import logo from './logo.svg';
import './App.css';

function getTitle(title) {
  return title;
}

function App() {

  return (
    <div className="App">
      <h1> hello {getTitle('React')} </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

    </div>
  );
}

export default App;
