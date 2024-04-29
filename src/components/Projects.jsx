import { useEffect, useState } from "react"
import { sanityClient } from "../sanity/client"

export default function Projects() {
    const [projectData, setProject] = useState([])

    async function fetchProjects() {
        const data = await sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`)
        return data
    }

    const getAllProjects = async () => {
        const data = await fetchProjects()
        setProject(data)
    }

    useEffect(() => {
        getAllProjects()
    }, [])
    return (
        <>
        <section className="projectsGrid">
            <h1>Projects page</h1>
            <h2>Welcome to my projects.</h2>
                {projectData.map((project, index) => (
                <article className="projectCards" key={index}>
                    <a href={project.link} alt={project.title} target="_blank">
                        <h3>{project.title}</h3>
                    </a>
                    <div className="projectDetails">
                        <span>Date: {project.date}, </span>
                        <span>Type: {project.projectType}</span>
                    </div>
                    <p>
                        {project.description}
                    </p>
                </article>
                ))}
        </section>
        </>
    )
}