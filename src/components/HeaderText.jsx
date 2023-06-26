import { Button, Container } from "react-bootstrap";

export const HeaderText = () => {
  return (
    <Container className="container-headertex mt-2 p-2">
      <div className="container-text mt-2 p-2">
        <h4>Hi There!</h4>
        <h1>I’m Luis Paz</h1>
        <h4> A Passionate Frontend Web Developer </h4>
        <h5>
          specialized in MERN stack, with a lot of passion for programming and
          provide Web Solutions with hight impact
        </h5>
        <Button className="btn mt-5" variant="dark" href="#contact">
          Contact Me
        </Button>
      </div>
    </Container>
  );
};
