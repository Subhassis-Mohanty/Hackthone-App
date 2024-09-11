import React from "react";
import { Button, Badge, Container, Row, Col } from "react-bootstrap";

const EventScreen = () => {
  return (
    <>
      <div style={{ backgroundColor: "#003049" }}>
        <Container className="py-5">
          <Row>
            <div md={7}>
              <div className="p-4">
                <div className="event-header mb-4 mt-4 ">
                  <Badge pill bg="warning" className="text-dark">
                    Starts on 17th Jun'22 09:00 PM (India Standard Time)
                  </Badge>
                </div>

                {/* Event Title */}
                <h1
                  className="event-title"
                  style={{ color: "white", marginTop: "3rem" }}
                >
                  Data Sprint 72 - Butterfly Identification
                </h1>
                <p
                  className="lead mb-4"
                  style={{ color: "white", marginTop: "3rem" }}
                >
                  Identify the class to which each butterfly belongs to
                </p>

                {/* Difficulty Badge */}
                <Badge pill bg="secondary" className="mb-3">
                  <i className="bi bi-bar-chart"></i> Easy
                </Badge>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Container className="mt-4">
        <div md={5}>
          <div>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h4 className="d-flex justify-content-around align-items-center fs-3 fw-bold">
                Overview
              </h4>
              <Row className=" justify-content-around align-items-centermt-5">
                <Col>
                  <Button variant="success" className="me-4 px-3 fw-medium">
                    Edit
                  </Button>
                  <Button variant="danger" className=" fw-medium">
                    Delete
                  </Button>
                </Col>
              </Row>
            </div>

            <hr />
            <p>
              Butterflies are the adult flying stage of certain insects
              belonging to an order or group called Lepidoptera. The word
              "Lepidoptera" means "scaly wings" in Greek. This name perfectly
              suits the insects in this group because their wings are covered
              with thousands of tiny scales overlapping in rows.
            </p>
            <p>
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </p>
            <p>
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EventScreen;
