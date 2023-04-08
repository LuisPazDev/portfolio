import React from "react"
import { Button, Container } from "react-bootstrap"

export const HeaderText = () => {
    return (
        <Container className='container-headertex mt-3 mb-3 p-3'>
            <div className='container-text mt-3 p-3'>
                <h4>Hi There!</h4>
                <h1>I’m Luis Paz</h1>
                <h4>I Am Passionate Web Developer </h4>
                <h5>
                    specialized in MERN stack, with a lot of passion for
                    programming and provide Web Solutions with hight impact
                </h5>
                <Button className='btn mt-4' variant='dark' href='#contact'>
                    Contact Me
                </Button>
            </div>
        </Container>
    )
}
