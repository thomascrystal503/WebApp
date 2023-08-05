import { useState } from "react";
import AddModal from "./AddModal";
import "./Hero.css";

export default function Hero({
  postNewUser,
  addUser,
  setNewName,
  setNewJobTitle,
  setNewCompanyName,
}) {
  // modal state and set state for modal need to be passed down so you can lift state up when button is clicked.
  // will need a function to do that up here that the button onclick triggers.
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1 className="text-light">
          <b>Your CONNECTION To EXTRAORDINARY Opportunities</b>
        </h1>
        <h2 className="text-light">The Future Is Waiting</h2>

        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <AddModal
            postNewUser={postNewUser}
            addUser={addUser}
            setNewName={setNewName}
            setNewJobTitle={setNewJobTitle}
            setNewCompanyName={setNewCompanyName}
          />
        </div>
      </div>
    </>
  );
}
