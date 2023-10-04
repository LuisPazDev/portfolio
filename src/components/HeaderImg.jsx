import React from "react"
import { Container, Image } from "react-bootstrap"
import luisimg from "../assets/luispazdevmain.png"

export const HeaderImg = () => {
    return (
        <>
            <Image roundedCircle src={luisimg} alt='luispazdev' />
        </>
    )
}
