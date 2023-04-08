import React from "react"
import { Container } from "react-bootstrap"
import { About } from "./About"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { NavBar } from "./NavBar"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"

export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}
