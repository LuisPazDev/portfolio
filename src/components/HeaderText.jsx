import { Button, Container } from "react-bootstrap"

export const HeaderText = () => {
    return (
        <Container>
            <div className='mt-5 mb-5'>
                <h4>Hi There!</h4>
                <h2>
                    I’m
                    <strong> Luis Paz</strong>
                </h2>
                <h3>Frontend Developer</h3>
                <h5>
                    Specialized in MERN stack development with a lot of passion
                    for programming and provide Web and Mobile Solutions with
                    high impact.
                </h5>
                <div className='mt-5 mb-4 d-flex justify-content-center justify-content-sm-start'>
                    <Button
                        className='mt-3'
                        style={{
                            backgroundColor: "black",
                            border: "none",
                        }}
                        size='lg'
                        href='#portfolio'>
                        <strong>
                            <i>Portfolio</i>
                        </strong>
                    </Button>
                </div>
            </div>
        </Container>
    )
}
