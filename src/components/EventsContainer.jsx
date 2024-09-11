import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import Events from "./Events";
import Img1 from "../assets/cardimage/Group1.png";
import Img2 from "../assets/cardimage/Group2.png";
import Img3 from "../assets/cardimage/Group3.png";
import Img4 from "../assets/cardimage/Group4.png";
import Img5 from "../assets/cardimage/Group5.png";
import Img6 from "../assets/cardimage/Group6.png";

const EventsContainer = () => {
  const [statusFilter, setStatusFilter] = useState([]);
  const [levelFilter, setLevelFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from localStorage on component mount
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    const defaultEvents = [
      {
        image: Img1,
        status: "Upcoming",
        level: "Medium",
        timeStatus: "Starts",
        title: "Data Sprint 72 - Butterfly Identification",
        timeRemaining: { days: "00", hours: "12", minutes: "34" },
      },
      {
        image: Img2,
        status: "Active",
        level: "Hard",
        timeStatus: "Ends",
        title: "Data Sprint 71 - Bird Identification",
        timeRemaining: { days: "00", hours: "06", minutes: "15" },
      },
      {
        image: Img3,
        status: "Past",
        level: "Easy",
        timeStatus: "Ended",
        title: "Data Sprint 70 - Flower Identification",
        timeRemaining: { days: "00", hours: "00", minutes: "00" },
      },
      {
        image: Img4,
        status: "Upcoming",
        level: "Medium",
        timeStatus: "Starts",
        title: "Data Sprint 73 - Animal Identification",
        timeRemaining: { days: "01", hours: "10", minutes: "45" },
      },
      {
        image: Img5,
        status: "Active",
        level: "Easy",
        timeStatus: "Ends",
        title: "Data Sprint 74 - Leaf Identification",
        timeRemaining: { days: "00", hours: "02", minutes: "30" },
      },
      {
        image: Img6,
        status: "Past",
        level: "Hard",
        timeStatus: "Ended",
        title: "Data Sprint 75 - Insect Identification",
        timeRemaining: { days: "00", hours: "00", minutes: "00" },
      },
    ];

    setEvents([...defaultEvents, ...storedEvents]);
  }, []);

  // Status filter
  const handleStatusFilterChange = (status) => {
    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((item) => item !== status)
        : [...prev, status]
    );
  };

  // Level filter
  const handleLevelFilterChange = (level) => {
    setLevelFilter((prev) =>
      prev.includes(level)
        ? prev.filter((item) => item !== level)
        : [...prev, level]
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesStatus =
      statusFilter.length === 0 || statusFilter.includes(event.status);
    const matchesLevel =
      levelFilter.length === 0 || levelFilter.includes(event.level);
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesLevel && matchesSearch;
  });

  return (
    <div
      style={{
        backgroundColor: "#003049",
        padding: "2rem 0",
        margin: "0 auto",
      }}
    >
      <Container style={{ marginLeft: "9.5rem", marginTop: "3rem" }}>
        <div className="d-flex" style={{ backgroundColor: "#003049" }}>
          {/* Search bar */}
          <Form.Group controlId="search" className="mb-4">
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "70rem" }}
            />
          </Form.Group>

          {/* Filter Dropdown */}
          <DropdownButton id="dropdown-filter" title="Filter" className="mb-4">
            <div className="p-3">
              {/* Status Section */}
              <strong>Status</strong>
              <Form.Check
                type="checkbox"
                label="All"
                onChange={() => setStatusFilter([])}
                checked={statusFilter.length === 0}
              />
              <Form.Check
                type="checkbox"
                label="Active"
                onChange={() => handleStatusFilterChange("Active")}
                checked={statusFilter.includes("Active")}
              />
              <Form.Check
                type="checkbox"
                label="Upcoming"
                onChange={() => handleStatusFilterChange("Upcoming")}
                checked={statusFilter.includes("Upcoming")}
              />
              <Form.Check
                type="checkbox"
                label="Past"
                onChange={() => handleStatusFilterChange("Past")}
                checked={statusFilter.includes("Past")}
              />
              <hr />
              {/* Level Section */}
              <strong>Level</strong>
              <Form.Check
                type="checkbox"
                label="Easy"
                onChange={() => handleLevelFilterChange("Easy")}
                checked={levelFilter.includes("Easy")}
              />
              <Form.Check
                type="checkbox"
                label="Medium"
                onChange={() => handleLevelFilterChange("Medium")}
                checked={levelFilter.includes("Medium")}
              />
              <Form.Check
                type="checkbox"
                label="Hard"
                onChange={() => handleLevelFilterChange("Hard")}
                checked={levelFilter.includes("Hard")}
              />
            </div>
          </DropdownButton>
        </div>

        {/* Event Cards */}
        <Row>
          {filteredEvents.map((event, index) => (
            <Col md={4} key={index} className="mb-5">
              <Events
                image={event.image}
                status={event.status}
                timeStatus={event.timeStatus}
                title={event.title}
                timeRemaining={event.timeRemaining}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventsContainer;
