import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function Modal2() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Please Login First <br /> <NavLink to={"/login"}>Click Here</NavLink>
        </Modal.Body>
        <Modal.Footer>
          <NavLink to={"/home"}>
            <Button variant="primary" onClick={handleClose}>
              Back to Home
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal2;
