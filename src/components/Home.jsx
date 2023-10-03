import { About } from "./About"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { NavBar } from "./NavBar"
import { Portfolio } from "./Portfolio"

export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}
