import Track from "./Track";

function SearchResults({tracks, handleAddButton}) {

    const options = tracks.map((track) => 
    {
        return (
        <div key={track.id}>
            <Track info={track} />
            <button value={track.id} onClick={handleAddButton}>Add</button>
        </div>
        )
    })
    return options
};

export default SearchResults;