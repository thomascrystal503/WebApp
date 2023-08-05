import Hero from "../Hero";

export default function Home({
  postNewUser,
  addUser,
  setNewName,
  setNewJobTitle,
  setNewCompanyName,
}) {
  // state for modal here, it is a boolean when modal comes up it is true, when it is closed it is false

  // button in hero component that will toggle the modal state so you need to pass down modal state and setModalState to hero component

  return (
    <>
      <Hero
        postNewUser={postNewUser}
        addUser={addUser}
        setNewName={setNewName}
        setNewJobTitle={setNewJobTitle}
        setNewCompanyName={setNewCompanyName}
      />
      <div data-aos="zoom-in-right">
        <p style={{ color: "white" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nam
          cupiditate repudiandae in corrupti reiciendis quae fugit, quos maiores
          possimus mollitia asperiores illo voluptatum ab cumque doloribus
          ratione earum aliquam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sint quo fuga voluptatum deserunt provident, placeat
          eos animi laboriosam. In odit omnis vel recusandae dolorum quis
          eligendi neque odio mollitia reprehenderit.
        </p>
      </div>
    </>
  );
}
