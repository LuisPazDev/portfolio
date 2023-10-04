import { Button, Container } from "react-bootstrap"

export const HeaderText = () => {
    return (
        <Container className='container-headertex'>
            <div className='container-text mt-4 mb-4 p-3'>
                <h4>Hi There!</h4>
                <h1>I’m Luis Paz</h1>
                <h5>
                    <h4>Frontend Developer</h4>
                    specialized in MERN stack with a lot of passion for
                    programming and provide Web and Mobile Solutions with hight
                    impact
                </h5>
            </div>

            <div>
                <Button variant='dark' size='lg' href='#portfolio'>
                    <strong>
                        <i>Portfolio</i>
                    </strong>
                </Button>
            </div>
        </Container>
    )
}
