import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EventForm = ({ addEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    level: "Easy",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewEvent({ ...newEvent, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.startDate && newEvent.endDate) {
      const eventWithDefaults = {
        ...newEvent,
        status: "Upcoming", // Set the default status
        timeStatus: "Starts",
        timeRemaining: { days: "00", hours: "00", minutes: "00" },
      };

      // Call the addEvent function to add the new event
      addEvent(eventWithDefaults);

      // Store event in localStorage
      const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
      localStorage.setItem(
        "events",
        JSON.stringify([...existingEvents, eventWithDefaults])
      );

      // Reset form
      setNewEvent({
        title: "",
        startDate: "",
        endDate: "",
        description: "",
        level: "Easy",
        image: null,
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <h2
        style={{
          display: "flex",
          backgroundColor: "#F8F8FF",
          height: "6rem",
          alignItems: "center",
          justifyContent: "start",
          paddingLeft: "4rem",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Challenge Details
      </h2>

      <div
        style={{ paddingLeft: "4rem", fontSize: "24px", fontWeight: "normal" }}
      >
        <div className="mt-5">
          <Form.Group controlId="title">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter challenge name"
              name="title"
              value={newEvent.title}
              style={{ width: "24rem" }}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        <div className="mt-5">
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={newEvent.startDate}
              style={{ width: "24rem" }}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        <div className="mt-5">
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={newEvent.endDate}
              style={{ width: "24rem" }}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        <div className="mt-5">
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={newEvent.description}
              style={{ width: "24rem", height: "18rem" }}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        <div className="mt-5">
          <Form.Group controlId="image">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              style={{ width: "24rem" }}
              onChange={handleImageUpload}
            />
          </Form.Group>
        </div>

        <div className="mt-5">
          <Form.Group controlId="level">
            <Form.Label>Level</Form.Label>
            <Form.Control
              as="select"
              name="level"
              value={newEvent.level}
              style={{ width: "24rem" }}
              onChange={handleInputChange}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="mt-5">
          <Button variant="success" type="submit">
            Create Challenges
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EventForm;
