import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddForm from "./AddForm";
import "./Hero.css";

function AddModal({
  postNewUser,
  addUser,
  setNewName,
  setNewJobTitle,
  setNewCompanyName,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="hero-btns">
        <Button
          variant="btns btn--outline btn--large"
          onClick={handleShow}
          style={{ color: "white" }}
        >
          Let's Talk
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modalContainer"
      >
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Connect with our team</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <AddForm
            setNewName={setNewName}
            setNewJobTitle={setNewJobTitle}
            setNewCompanyName={setNewCompanyName}
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="btn--medium" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn--medium" onClick={(e) => postNewUser(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
