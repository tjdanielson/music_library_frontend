import React, {useState} from "react";

const PlaySong = (props) => {

    
    const LoadVideo = () => {

        props.setSongUrl(props.song.youtube_id)

    }
    
    return (  
        <div className="play-button">
            <button onClick={LoadVideo}><img src="./assets/play-removebg-preview.png"/></button>
        </div>
    );
}
 
export default PlaySong;