import React from "react"
import { Container, Image } from "react-bootstrap"
import luisimg from "../assets/luispazdevmain.png"

export const HeaderImg = () => {
    return (
        <Container className='container-headerimg '>
            <div className='container-img mt-6 p-3'>
                <Image roundedCircle src={luisimg} alt='luispazdev' />
            </div>
        </Container>
    )
}
