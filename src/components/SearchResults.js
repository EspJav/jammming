import Track from "./Track";

function SearchResults({tracks}) {
    return(
        <div>
            {tracks.map(({name, album, artist},index) => {
            return (
                <>
                    <Track  key={index} name={name} album={album} artist={artist} />
                </>
            )
        })}
        </div>
    )
};

export default SearchResults;