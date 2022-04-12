import React, {useEffect, useState} from "react";
import AddNewSong from "../AddNewSong/AddNewSong";


const Banner = (props) => {


    return ( 
        <div className="banner-container">
            <h1>My Playlist</h1>
            <AddNewSong />
        </div>
        
     );
}


 
export default Banner;