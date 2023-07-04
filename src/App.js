import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [searchValue, setSearchValue] = useState('default');

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);

  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SearchBar value={searchValue} handleSearchValueChange={handleSearchValueChange} handleSearchSubmit={handleSearchSubmit} />
      </header>
    </div>
  );
}

export default App;
