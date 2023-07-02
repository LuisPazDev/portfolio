import React from "react";
import { Container } from "react-bootstrap";
import luisimg from "../assets/luispazdevmain.png";

export const HeaderImg = () => {
  return (
    <Container className="container-headerimg ">
      <div className="container-img mt-4 p-3">
        <img src={luisimg} alt="luispazdev" className="img-header" />
      </div>
    </Container>
  );
};
