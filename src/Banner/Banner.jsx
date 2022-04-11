import React, {useEffect, useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'bootstrap';


const Banner = (props) => {

    // const [show, setShow] = useState(false);

    // const handleShow = () => {
    //     setShow(true);
    //     ShowModal();
    // }

    return ( 
        <div className="banner-container">
            <h1>My Playlist</h1>
            <div>
            {/* <button variant="primary">
                Add New Song
            </button> */}
        </div>
        </div>
     );
}


 
export default Banner;