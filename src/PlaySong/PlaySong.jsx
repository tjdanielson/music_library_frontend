import React, {useState} from "react";

const PlaySong = (props) => {

    const [songUrl, setSongUrl] = useState('TOypSnKFHrE')
    
    
    return (  
        <div className="video-wrapper">
            <iframe
            src={`https://www.youtube.com/embed/${songUrl}`}
            allow="autoplay"
            allowFullScreen
            title="video"
            />
      </div>
    );
}
 
export default PlaySong;