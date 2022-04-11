import React, {useState} from "react";

const PlaySong = (props) => {

    
    const LoadVideo = () => {

        props.setSongUrl(props.song.youtube_id)

    }
    
    return (  
        <div>
            <button onClick={LoadVideo}>Play</button>
        </div>
    );
}
 
export default PlaySong;