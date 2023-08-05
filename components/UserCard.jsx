import { useState } from "react";
import { Col, Button, Card, Row } from "react-bootstrap";

//conditional rendering..... if true - render this, if false, render this

export default function UserCard({ userList }) {
  const [showImage, setShowImage] = useState(true);

  return (
    <>
      <div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {userList.map((user, idx) => (
            <Col key={idx}>
              <Card
                className="bg-transparent"
                onMouseOver={() => setShowImage(false)}
                onMouseLeave={() => setShowImage(true)}
              >
                {showImage ? (
                  <Card.Img
                    variant="top rounded-circle"
                    src={user.avatar}
                    alt="Asdfge"
                  />
                ) : (
                  <p className="text-light">{user.info}</p>
                )}
                <Card.Body>
                  <Card.Title className="text-light">{user.name}</Card.Title>
                  <Card.Text className="text-light">{user.jobTitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
// <Col>
//   <div className="bg-light border p-3 m-1" key={user.id + "b"}>
//     <h4>Name: {user.name}</h4>
//     <p>Skills: {user.skills}</p>
//   </div>
// </Col>
