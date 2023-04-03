import { useState } from "react"
import { ProjectModal1 } from "./ProjectModal1"

export const ProjectCard1 = () => {
    const [show, setShow] = useState(false)

    return (
        <div
            className='container-portfolio-project1'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            {show && <ProjectModal1 />}
        </div>
    )
}
