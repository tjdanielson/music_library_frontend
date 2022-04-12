import React, {useEffect, useState} from "react";
import axios from 'axios';
import SearchBar from "../SearchBar/SearchBar";
import DeleteSong from "../DeleteSong/DeleteSong";
import UpdateSong from "../UpdateSong/UpdateSong";
import PlaySong from "../PlaySong/PlaySong";

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

        let mediaQueryCondition = window.matchMedia('( max-width: 700px )')

        if (mediaQueryCondition.matches) {
            return (
                <table className='my-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {MusicLibrary.map((song, i) => {
                        return (
                            <tr key={i}>
                                <td><PlaySong song={song} setSongUrl={props.setSongUrl}/></td>
                                <td>{song.title}</td>
                                <td><DeleteSong songIdproperty={song.id}/></td>
                                <td><UpdateSong song={song}/></td>
                            </tr>
                            )}   
                        )
                    }
                </tbody>
            </table>
        );
        } else {
            
        return (
            <table className='my-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {MusicLibrary.map((song, i) => {
                        return (
                            <tr key={i}>
                                <td><PlaySong song={song} setSongUrl={props.setSongUrl}/></td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td><DeleteSong songIdproperty={song.id} reloadMusic={makeGetRequest}/></td>
                                <td><UpdateSong song={song} reloadMusic={makeGetRequest}/></td>
                            </tr>
                            )}   
                        )
                    }
                </tbody>
            </table>
        );
        }

    }

    return ( 
        <div>
            <SearchBar MusicLibrary={MusicLibrary} setMusicLibrary={setMusicLibrary}/>
            <div className='table-container'>
                <DisplayMusic />
            </div>
            <div className='reload-button-container'>
                <button onClick={makeGetRequest}>Reload Playlist</button>
            </div>
        </div>
        
     );
}
 
export default MusicTable;


