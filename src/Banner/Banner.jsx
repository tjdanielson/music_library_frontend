import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Modal, Button} from "bootstrap";

const Banner = (props) => {

    // const [newSong, setNewSong] = useState({})

    const AddNewSong = (props) => {
        return (
            <div>
                <form>
                    <label>Title</label>
                    <input type='text' />
                    <label>Artist</label>
                    <input type='text' />
                    <label>Album</label>
                    <input type='text' />
                    <label>Release Date</label>
                    <input type='text' />
                    <label>Genre</label>
                    <input type='text' />
                </form>
            </div>
        )
    }

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
            <AddNewSong />
        </div>
     );
}
 
export default Banner;