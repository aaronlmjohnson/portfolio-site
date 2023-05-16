import uniqid from 'uniqid';

interface ProjectsProps {
    name: string;
    links: any;
    src: string;
    description: string;
}

const ProjectDiv = ({name, links, src, description}: ProjectsProps)=>{
    return (
        <div className="project" key={uniqid()}>
            <h1>{name}</h1>          
            <img className="project-preview" alt ="#"src={src} width="800px"></img>
            <p className="project-description">
                {description}
            </p>
        </div>
    )
}

const Projects = (props: any)=>{
    return (
        <div id="projects">
            <h1>Projects</h1>
            {
                props.projectData.map((project: any, i: number)=>{
                    return <ProjectDiv 
                            name={project.name}
                            links={project.links}
                            src={project.src} 
                            description = {project.description}

                            />
                })
            }
        </div>
    )
}

export default Projects;