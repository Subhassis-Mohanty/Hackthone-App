import React from "react";
import logo from "../assets/logo.jpg";
import { Navbar } from "react-bootstrap";

const LogoNav = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      variant="light"
    >
      <Navbar.Brand href="#">
        <img
          src={logo}
          width="120"
          height="70"
          className="d-inline-block align-top "
          alt="Logo"
          style={{ marginLeft: "35px" }}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default LogoNav;
