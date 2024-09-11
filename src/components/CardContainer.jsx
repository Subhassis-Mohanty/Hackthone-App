import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleCard from "./SimpleCard";
import Vector from "../assets/icons/Vector.svg";
import Robot from "../assets/icons/Robot.svg";
import Notebook from "../assets/icons/notebook-ref.svg";
import IdCard from "../assets/icons/IdCard.svg";

const cardData = [
  {
    logo: Notebook,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    logo: Vector,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    logo: Robot,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    logo: IdCard,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const CardContainer = () => {
  return (
    <Container>
      <h2 className="text-center mt-4 mb-5">
        Why Participate In AI Challenges?
      </h2>
      <Row className="mx-auto ">
        {cardData.map((card, index) => (
          <Col xs={12} md={12} lg={6} key={index} className="mb-4">
            <SimpleCard
              logo={card.logo}
              title={card.title}
              description={card.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
