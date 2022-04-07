import React, {useEffect, useState} from "react";
import axios from 'axios';

const Banner = (props) => {

    // const [newSong, setNewSong] = useState({})

    // useEffect(() => {
    //     makePostRequest();
    // }, [])

    async function makePostRequest(){
        let newSong = {
            title: "New Song 3",
            album: "New Album",
            artist: "New Artist",
            genre: "New Genre",
            releaseDate: "2022-02-02"
        }

        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if(response.status === 201){
            console.log(response.data)
        } else {
            console.log('something did not work')
        }
    }

    return ( 
        <div>
            <h1>My Playlist</h1>
            <button onClick={makePostRequest}>add new song</button>
        </div>

     );
}
 
export default Banner;