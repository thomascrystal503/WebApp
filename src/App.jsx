import { useState, useEffect } from "react";
import NavMenu from "../components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Admin from "../components/pages/Admin";
import Footer from "../components/Footer";
import "./App.css";
//import { TEST_USER } from "./TEST_USER";
import Container from "react-bootstrap/Container";
import "bootswatch/dist/vapor/bootstrap.min.css";

function App() {
  const API_URL = "https://6496271183d4c69925a2a84c.mockapi.io/users";

  const [userList, setUserList] = useState([]);
  //console.log(userList);
  const [newUserName, setNewUserName] = useState("");
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");

  // const [updatedUserName, setUpdatedUserName] = useState("");
  // const [updtedJobTitle, setUpdatedJobTitle] = useState("");
  // const [updatedCompanyName, setUpdatedCompanyName] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setUserList(data);
        //console.log(data);
      });
  }
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     setUserList(data);
  //   };
  //   getUsers();
  // }, []);

  let nextId = 15;
  //This is working!
  // const addUser = async (newUserData) => {
  //   //update on backend
  //   const response = await fetch(API_URL, {
  //     method: "Post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: newUserName,
  //       jobTitle: newJobTitle,
  //       companyName: newCompanyName,
  //     }),
  //   });
  //   const data = await response.json();
  //   //update on front end
  //   // const newUser = {
  //   //   ...newUserData,
  //   //   id: nextId++,
  //   // };

  //   setUserList([...userList, data]);
  // };

  const updateUser = (updatedUserData) => {
    fetch(`${API_URL}/${updatedUserData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    }).then(() => getUsers());
  };
  // setUserList(
  //   userList.map((user) =>
  //     user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user
  //   )
  // );
  //};

  const deleteUser = (idToDelete) => {
    fetch(API_URL + `/${idToDelete}`, {
      method: "DELETE",
    }).then(() => getUsers());
  };
  //for test data
  // setUserList(userList.filter((user) => user.id === idToDelete));
  //};

  const selectUser = (idToDelete) => {
    setUserList(userList.filter((user) => user.id === idToDelete));
  };

  function postNewUser(e) {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUserName,
        jobTitle: newJobTitle,
        companyName: newCompanyName,
      }),
    }).then(() => getUsers());
  }

  return (
    <>
      <NavMenu />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postNewUser={postNewUser}
                //addUser={addUser}
                setNewName={setNewUserName}
                setNewJobTitle={setNewJobTitle}
                setNewCompanyName={setNewCompanyName}
              />
            }
          />
          <Route path="/services" element={<Services userList={userList} />} />
          <Route
            path="/admin"
            element={
              <Admin
                userList={userList}
                deleteUser={deleteUser}
                selectUser={selectUser}
                API_URL={API_URL}
                getUsers={getUsers}
              />
            }
          />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
