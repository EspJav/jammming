
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
  const [tracks, setTracks]  = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue).then((response) => {
      setTracks(response);
    });
   };

   //handle state of added songs to tracklist
   const [savedTracks, setSavedTracks] = useState([]);

   const  handleAddButton = (e) => {
    e.preventDefault();
    const selectedTrack = tracks.filter((track) => track.id === e.target.value);
    setSavedTracks(prev => [...prev, selectedTrack[0]])
   };
   
   const handleRemoveButton = (e) => {
    e.preventDefault();
    setSavedTracks(prev => savedTracks.filter((track) => track.id !== e.target.value))
  
  }
   //App final return statement
  return (
    <>
      <div className='aboutArea' style={{border: '2px solid red'}}>
        <h1>Jammming!</h1>
        <p>Create a spotify playlist AND save it to your playlists!</p>
      </div>
      <div className='appArea' style={{border: '2px solid blue', display: 'flex', justifyContent: 'center', overflow: 'overlay'}}>
        <div className='SearchArea'style={{border: '2px solid orange'}}>
          <SearchBar handleSearchValueChange={handleSearchValueChange} handleSearchSubmit={handleSearchSubmit}/>
          <SearchResults tracks={tracks} handleAddButton={handleAddButton} />
        </div>
        <div className='PlaylistArea' style={{border: '5px solid green'}}>
          <Tracklist savedTracks={savedTracks} handleRemoveButton={handleRemoveButton} />
        </div>
      </div>

    </>
  )
}

export default App;
