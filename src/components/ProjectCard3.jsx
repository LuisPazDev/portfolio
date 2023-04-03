import { useState } from "react"
import { ProjectModal3 } from "./ProjectModal3"

export const ProjectCard3 = () => {
    const [show, setShow] = useState(false)

    return (
        <div
            className='container-portfolio-project3'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            {show && <ProjectModal3 />}
        </div>
    )
}
