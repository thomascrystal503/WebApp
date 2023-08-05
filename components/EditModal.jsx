import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Hero.css";

function EditModal({
  setUpdatedName,
  setUpdatedJobTitle,
  setUpdatedCompanyName,
  updatedName,
  updatedJobTitle,
  updatedCompanyName,
  API_URL,
  getUsers,
  id,
  user,
  userList,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateUser(id) {
    fetch(`${API_URL}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
        jobTitle: updatedJobTitle,
        companyName: updatedCompanyName,
      }),
    })
      .then(() => getUsers())
      .then(() => handleClose());
  }
  // // setUserList(
  // //   userList.map((user) =>
  // //     user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user
  // //   )
  // // );
  // //};
  // const updateUser = async () => {
  //   const response = await fetch(API_URL);
  //   const data = fetch(`${API_URL}/${user.id}`, {
  //     method: "Put",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: updatedName,
  //       jobTitle: updatedJobTitle,
  //       companyName: updatedCompanyName,
  //     }),
  //   });
  // };

  return (
    <>
      <Button variant="info" className="btn-sm" onClick={handleShow}>
        <i className="far fa-edit"></i>
      </Button>

      <Modal
        variant="light"
        show={show}
        onHide={handleClose}
        animation={false}
        className="modalContainer"
      >
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title>Update Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            <Form.Group className="mb-3">
              <label htmlFor="name" className="form-label mt-4">
                Update Name
              </label>
              <input
                id="name"
                className="form-control me-sm-2"
                placeholder="Make changes to your name here"
                onChange={(e) => {
                  setUpdatedName(e.target.value);
                }}
              ></input>
            </Form.Group>

            <Form.Group className="mb-3">
              <label htmlFor="jobTitle" className="form-label mt-4">
                Update Job Title
              </label>
              <input
                id="jobTitle"
                className="form-control me-sm-2"
                placeholder="What are you doing now?"
                onChange={(e) => setUpdatedJobTitle(e.target.value)}
              ></input>
            </Form.Group>

            <label htmlFor="companyName" className="form-label mt-4">
              Update Company Name
            </label>
            <Form.Group className="mb-3">
              <input
                id="companyName"
                className="form-control me-sm-2"
                placeholder="Whom did you interview with?"
                onChange={(e) => setUpdatedCompanyName(e.target.value)}
              ></input>
            </Form.Group>
            <br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-secondary my-2 my-sm-0" onClick={updateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;

// function handleClick() {
//   user.name = updatedName;
//   user.jobTitle = updatedJobTitle;
//   user.companyName = updatedCompanyName;
//   user.id = updateUser(id, user);
//   console.log(user.id);
// }
