import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UpdateSong = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseSave = (event) => {
        setShow(false)
        handleSubmit(event)
    }

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let updatedSong = {
            id: props.songIdproperty,
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        makePutRequest(updatedSong)
    }

    async function makePutRequest(updatedSong){
        let response = await axios.put(`http://127.0.0.1:8000/api/music/${updatedSong.id}/`, updatedSong);
        if(response.status === 200){
            console.log(response.data)
        } else {
            console.log('something did not work')
        }
    }

    return ( 
        <>
        <Button variant="primary" onClick={handleShow}>
          Update
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='my-form'>
                    <form>
                        <div className='form-group'>
                            <label>Title</label>
                            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Artist</label>
                            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Album</label>
                            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Release Date</label>
                            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Genre</label>
                            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
                        </div>
                    </form>
                </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

     );
}
 
export default UpdateSong;