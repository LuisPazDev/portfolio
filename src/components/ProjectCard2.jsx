import { useState } from "react"
import { ProjectModal2 } from "./ProjectModal2"

export const ProjectCard2 = () => {
    const [show, setShow] = useState(false)

    return (
        <div
            className='container-portfolio-project2'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            {show && <ProjectModal2 />}
        </div>
    )
}
