import React, {useEffect, useState} from "react";
import axios from 'axios';
import SearchBar from "../SearchBar/SearchBar";
import DeleteSong from "../DeleteSong/DeleteSong";

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
                                <td>{song.id}</td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td><DeleteSong songIdproperty={song.id}/></td>
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
            <SearchBar MusicLibrary={MusicLibrary} setMusicLibrary={setMusicLibrary}/>
            <DisplayMusic />
            <button onClick={makeGetRequest}>Reload Playlist</button>
        </div>
        
     );

     debugger;
}
 
export default MusicTable;


