//api key

import {accessToken} from './spotifyKey';


//headers, url, and mothods for api call

const url = 'https://api.spotify.com/v1/search?';
const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
}

//function to handle calling spotify api

async function fetchData(title) {
 
    let results = [];
    //changing user input to replace all spaces with + for search url
    let fixedTitle = title.replaceAll(" ",  '+');

    //parameters set to looking for tracks #Replace with dropdown option for different searches
    let parameters = `q=${fixedTitle}&type=track`;

    //Change data from promise to easy to use list of track names and images of the album
    const response = await fetch(url + parameters , options);
    const responseJson = await response.json();
    let info = responseJson.tracks.items;
    //iterate through api response to pull out song name album name and artist name 
    info.forEach((result) => {
        results.push({
            name: result.name,
            album: result.album.name,
            artist: result.artists[0].name,
        });

    });
    return results;
};

export default fetchData;