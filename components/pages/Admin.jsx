import { useState } from "react";
import { Table, Image } from "react-bootstrap";
import EditModal from "../EditModal";

export default function Admin({
  userList,
  deleteUser,
  selectUser,
  API_URL,
  getUsers,
}) {
  const [updatedUserName, setUpdatedUserName] = useState("");
  const [updatedJobTitle, setUpdatedJobTitle] = useState("");
  const [updatedCompanyName, setUpdatedCompanyName] = useState("");

  // const updateUser = (updatedUserData) => {
  //   fetch(`${API_URL}/${updatedUserData.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedUserData),
  //   }).then(() => getUsers());
  // };
  // // setUserList(
  // //   userList.map((user) =>
  // //     user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user
  // //   )
  // // );
  // //};

  return (
    <>
      <h1 className="text-info">Admin</h1>
      <Table
        variant="table table-info"
        style={{ width: "100%", margin: "20px auto" }}
        striped
        bordered
        hover
        responsive
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Company</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {userList.map((user, index) => (
            <tr scope="row" key={index}>
              <td>
                <Image src={user.avatar} roundedCircle bg="dark" />
              </td>
              <td>{user.name}</td>
              <td>{user.jobTitle}</td>
              <td>{user.companyName}</td>
              <td>
                <div>
                  <button
                    className="btn btn-outline-danger btn-sm "
                    onClick={() => deleteUser(user.id)}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
                <br></br>

                <EditModal
                  id={user.id}
                  jobTitle={user.jobTitle}
                  companyName={user.companyName}
                  user={user}
                  getUsers={getUsers}
                  API_URL={API_URL}
                  updatedName={updatedUserName}
                  updatedJobTitle={updatedJobTitle}
                  updatedCompanyName={updatedCompanyName}
                  setUpdatedName={setUpdatedUserName}
                  setUpdatedJobTitle={setUpdatedJobTitle}
                  setUpdatedCompanyName={setUpdatedCompanyName}
                  userList={userList}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

// <div className="d-grid  col-6 ">
//   <button
//     className="btn btn-secondary btn-sm"
//     onClick={() => selectUser(user.id)}
//   >
//     Select
//   </button>
// </div>
