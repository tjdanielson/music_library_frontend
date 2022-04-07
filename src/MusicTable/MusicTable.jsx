import React, {useEffect} from "react";
import axios from 'axios';

const MusicTable = (props) => {

    useEffect(() => {
        makeGetRequest();
    }, [])

    async function makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/music/');
            console.log(response.data);
        } catch (ex) {
            console.log('Oh no something didn\'t work right :(');
        }
    }

    return ( 
        <div>
            <h1>Practicing my async axios calls!</h1>
            <button onClick={makeGetRequest}>Please work!!</button>
        </div>
     );
}
 
export default MusicTable;