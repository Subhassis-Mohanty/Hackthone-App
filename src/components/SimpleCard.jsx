import React from "react";
import { Card } from "react-bootstrap";

const SimpleCard = ({ logo, title, description }) => {
  return (
    <div>
      <Card className="custom-card" style={{ backgroundColor: "#F0F8FF" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={logo}
            style={{ width: "53px", margin: "12px auto" }}
          />
          <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SimpleCard;
