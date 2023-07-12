import Track from "./Track";


function Tracklist({savedTracks, handleRemoveButton}) {

    const results = savedTracks.map((track) => {
        return (
        <div key={track.id}>
            <Track info={track} />
            <button value={track.id} onClick={handleRemoveButton}>Remove</button>
        </div>
        )
    }) 
    return results;
};

export default Tracklist;