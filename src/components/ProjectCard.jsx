import { useState } from "react"
import { ProjectModal } from "./ProjectModal"

export const ProjectCard = () => {
    const [show, setShow] = useState(false)

    return (
        <div
            className='container-portfolio-project1'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            {!show && <ProjectModal />}
        </div>
    )
}
