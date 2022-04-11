import React, { useState } from "react";
import axios from "axios";

const AddNewSong = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        console.log(newSong)
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
        makePostRequest(newSong)
    }

    async function makePostRequest(newSong){

        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if(response.status === 201){
            console.log(response.data)
        } else {
            console.log('something did not work')
        }
    }
    
    
    return ( 
        <div>
            <h3>Add New Song</h3>
            <div className='my-form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Artist</label>
                        <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Album</label>
                        <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Release Date</label>
                        <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Genre</label>
                        <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddNewSong;