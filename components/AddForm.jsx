import { Form, Button } from "react-bootstrap";

export default function AddForm({
  setNewName,
  setNewJobTitle,
  setNewCompanyName,
}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <h3>Tell us about yourself</h3>
          <label>Name</label>
          <input onChange={(e) => setNewName(e.target.value)}></input>
        </Form.Group>

        <Form.Group className="mb-3">
          <label>Job Title</label>
          <input onChange={(e) => setNewJobTitle(e.target.value)}></input>
        </Form.Group>

        <Form.Group className="mb-3">
          <label>Company Name</label>
          <input onChange={(e) => setNewCompanyName(e.target.value)}></input>
        </Form.Group>

        {/* <Button onClick={(e) => postNewUser(e)} variant="success">
          Submit
        </Button> */}
      </Form>
    </>
  );
}
