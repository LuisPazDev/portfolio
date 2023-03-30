import React from "react"
import { Button, Container } from "react-bootstrap"

export const HeaderText = () => {
    return (
        <Container className='container-headertext p-5 mt-4'>
            <div className='container-text'>
                <h4>Hi There!</h4>
                <h1>I’m Luis Paz</h1>
                <h4>I Am Passionate Web Developer </h4>
                <h5>
                    specialized in MERN stack, with a lot of passion for
                    programming and provide Web Solutions with hight impact
                </h5>
                <Button className='btn mt-4 p-3' variant='dark' href='#contact'>
                    Contact Me
                </Button>
            </div>
        </Container>
    )
}
