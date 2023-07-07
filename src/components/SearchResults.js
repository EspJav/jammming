import Track from "./Track";

function SearchResults({tracks}) {
    return(
        <div>
    {tracks.map(({name, album, artist}) => {
        return <Track name={name} album={album} artist={artist} />
    })}
    </div>
    )
};

export default SearchResults;