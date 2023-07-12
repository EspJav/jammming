import Tracklist from "./Tracklist";

function Playlist({savedTracks, handleRemoveButton}) {
    return (
    <div>
        <input type="text" ></input>
        <Tracklist savedTracks={savedTracks} handleRemoveButton={handleRemoveButton} />
        <button type="submit">Save to Spotify</button>
    </div>
    )
};

export default Playlist;