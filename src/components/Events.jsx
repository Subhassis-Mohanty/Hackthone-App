import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Events = ({ image, status, title, timeStatus, timeRemaining }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleButtonClick = () => {
    window.open("/event-details", "_blank"); // Opens the event form in a new tab
  };

  return (
    <Card
      style={{
        width: "20rem",
        height: "28rem",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body className="text-center">
        <Badge pill bg="warning" text="dark" className="mb-2">
          {status}
        </Badge>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{timeStatus} in</Card.Text>
        <div className="d-flex justify-content-center mb-3">
          <div className="mx-2 text-center">
            <h5 className="mb-0">{timeRemaining.days}</h5>
            <small>Days</small>
          </div>
          <div className="mx-2 text-center">
            <h5 className="mb-0">{timeRemaining.hours}</h5>
            <small>Hours</small>
          </div>
          <div className="mx-2 text-center">
            <h5 className="mb-0">{timeRemaining.minutes}</h5>
            <small>Mins</small>
          </div>
        </div>
        {/* Add onClick handler to the button */}
        <Button variant="success" onClick={handleButtonClick}>
          Participate Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Events;
