import React, {useEffect, useState} from "react";
import axios from 'axios';

const MusicTable = (props) => {

    const [MusicLibrary, setMusicLibrary] = useState([])

    useEffect(() => {
        makeGetRequest();
    }, [])

    async function makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/music/');
            setMusicLibrary(response.data)
        } catch (ex) {
            console.log('Oh no something didn\'t work right :(');
        }
    }

    const DisplayMusic = () => {

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {MusicLibrary.map((song, i) => {
                        return (
                            <tr key={i}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                            </tr>
                            )}   
                        )
                    }
                </tbody>
            </table>
        );
    }

    return ( 
        <div>
            <h1>My Playlist</h1>
            <DisplayMusic />
            <button onClick={makeGetRequest}>Reload Playlist</button>
        </div>
        

        
     );
}
 
export default MusicTable;


