import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Rocketicon from "../assets/icons/Rocket.svg";
import { useNavigate } from "react-router-dom";
import StatsSection from "./StatsSection";
import CardContainer from "./CardContainer";
import EventsContainer from "./EventsContainer";

const HomeSection = () => {
  const navigate = useNavigate();

  const handleCreateChallengeClick = () => {
    window.open("/create-challenge", "_blank"); // Opens the event form in a new tab
  };

  return (
    <>
      <div
        className="mx-auto "
        style={{ backgroundColor: "#003049", padding: "6rem 0" }}
      >
        <Container>
          <Row className="align-items-center" style={{ marginLeft: "40px" }}>
            <Col md={6}>
              <h1 style={{ color: "#fff", fontWeight: "bold" }}>
                Accelerate Innovation with Global AI Challenges
              </h1>
              <p style={{ color: "#fff", marginTop: "20px" }}>
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
              <Button
                variant="light"
                style={{ marginTop: "20px", color: "#003049" }}
                onClick={handleCreateChallengeClick}
              >
                Create Challenge
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img src={Rocketicon} alt="Rocket" style={{ maxWidth: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <StatsSection />
        <CardContainer />
        <EventsContainer />
      </div>
    </>
  );
};

export default HomeSection;
