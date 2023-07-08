
import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
import fetchData from './modules/spotifyapi';



function App() {
  //Functionality of search bar
  const [searchValue, setSearchValue] = useState('Earth Wind and fire');

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  //handle options on search results
  const [tracks, setTracks]  = useState([{name:'', artist: '', album: ''}]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue).then((response) => {
      setTracks(response);
    });
   };


  return (
    <>
      <div style={{textAlign: 'left', marginLeft: 25}}>
        <h1>Jammming!</h1>
        <p>Create a spotify playlist AND save it to your playlists!</p>
        <SearchBar handleSearchValueChange={handleSearchValueChange} handleSearchSubmit={handleSearchSubmit}/>
        <SearchResults tracks={tracks} />
      </div>
    </>
  )
}

export default App;
