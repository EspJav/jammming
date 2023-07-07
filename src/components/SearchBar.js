import React from 'react';


//passed props from main container
//HandleSearchBarChange
//handleSearchSubmit
//searchValue

function SearchBar({handleSearchSubmit, handleSearchValueChange}) {
    return (
        <>
        <form onSubmit={handleSearchSubmit}>
            <input id="search" onChange={handleSearchValueChange}  placeholder="Search for a song.."></input>
            <button type="submit">Search</button>

        </form>
        </>
    )


};

export default SearchBar;