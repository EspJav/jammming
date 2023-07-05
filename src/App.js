import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';




function App() {
  /*
  const [searchValue, setSearchValue] = useState('default');

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);

  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

  };
  */

  return (
    <>
      <div>
        <h1>Jammming!</h1>
        <p>Create a spotify playlist AND save it to your playlists!</p>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
      </div>
    </>
  )
}

export default App;
