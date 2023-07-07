
import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
import fetchData from './modules/spotifyapi';



function App() {
  //Functionality of search bar
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue).then((response) => {
      setTracks(response);
    });
   };
   
  //set state of search results
  const [tracks, setTracks]  = useState([{name:'', artist: '', album: ''}]);




  return (
    <>
      <div>
        <h1>Jammming!</h1>
        <p>Create a spotify playlist AND save it to your playlists!</p>
        <SearchBar handleSearchValueChange={handleSearchValueChange} handleSearchSubmit={handleSearchSubmit}/>
        <SearchResults tracks={tracks} />
      </div>
    </>
  )
}

export default App;
