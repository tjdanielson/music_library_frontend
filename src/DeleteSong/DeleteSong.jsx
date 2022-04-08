import React, { useState } from "react";
import axios from "axios";

const DeleteSong = (props) => {


    async function makeDeleteRequest(songIdproperty){
        console.log(props.songIdproperty)
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/api/music/${props.songIdproperty}`);
            alert(`Song: ${props.songIdproperty} deleted`)
        } catch (ex) {
            console.log('Oh no something didn\'t work right :(');
        }
    }

    return ( 
        <button onClick={makeDeleteRequest}>Delete</button>
     );
}
 
export default DeleteSong;