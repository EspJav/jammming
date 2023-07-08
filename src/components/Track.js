

function Track({name, artist, album}) {
    //console.log(`${name}`);
    return (
        <>
        <div>
            <div>
                <h3>{name}</h3>
                <p>{artist}</p>
                <p>{album}</p>
            </div>
            <button>+</button>
        </div>
    </>
    )
};

export default Track;