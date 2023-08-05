import { Row, Col } from "react-bootstrap";
import UserCard from "../UserCard";
import "../Hero.css";

export default function Services({ userList }) {
  // const users = userList.map((user) => {
  //   <UserCard key={user.id} user={user} />;
  //   console.log(users);
  // });

  //console.log(userList);
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1 className="text-light">
          <b>Your CONNECTION To EXTRAORDINARY Talent</b>
        </h1>
        <br></br>
        <h4 className="text-light">
          LET'S <b>CONNECT</b>
        </h4>
      </div>
      <Row>
        <h4 className="text-light">Open To Work</h4>
        <Col className="mb-2">
          <UserCard userList={userList} />
        </Col>
      </Row>
    </>
  );
}
