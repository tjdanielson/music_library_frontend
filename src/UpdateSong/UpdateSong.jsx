import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UpdateSong = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <input type='text'/>
                        </div>
                        <div className='form-group'>
                            <label>Artist</label>
                            <input type='text'  />
                        </div>
                        <div className='form-group'>
                            <label>Album</label>
                            <input type='text' />
                        </div>
                        <div className='form-group'>
                            <label>Release Date</label>
                            <input type='date' />
                        </div>
                        <div className='form-group'>
                            <label>Genre</label>
                            <input type='text' />
                        </div>
                    </form>
                </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

     );
}
 
export default UpdateSong;