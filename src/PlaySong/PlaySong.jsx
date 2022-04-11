import React, {useState} from "react";

const PlaySong = (props) => {

    
    const LoadVideo = () => {

        props.setSongUrl(props.song.youtube_id)

    }
    
    return (  
        <div className="play-button">
            <button onClick={LoadVideo}><img src="./assets/play.png"/></button>
        </div>
    );
}
 
export default PlaySong;