import React from "react";
import { Container } from "react-bootstrap";
import luisimg from "../assets/luispazdevmain.png";

export const HeaderImg = () => {
  return (
    <Container className="container-headerimg mt-2 p-3">
      <div className="container-img">
        <img src={luisimg} alt="luispazdev" className="img-header" />
      </div>
    </Container>
  );
};
