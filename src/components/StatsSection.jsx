import Group from "../assets/icons/Group.svg";
import Followers from "../assets/icons/Followers.svg";
import Ai from "../assets/icons/Ai.svg";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  const stats = [
    { icon: Ai, label: "AI model submissions", value: "100K+" },
    { icon: Followers, label: "Data Scientists", value: "50K+" },
    { icon: Group, label: "AI Challenges hosted", value: "100+" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#003049",
        padding: "28px 0",
        borderTop: "1px solid #ccc",
      }}
    >
      <Container>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col
              key={index}
              md={4}
              style={{
                color: "#fff",
                borderRight:
                  index !== stats.length - 1 ? "1px solid #ccc" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={stat.icon}
                  alt="icon"
                  width="60"
                  height="60"
                  style={{ marginRight: "20px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0 }}>{stat.value}</h4>
                    <p style={{ margin: 0 }}>{stat.label}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;
