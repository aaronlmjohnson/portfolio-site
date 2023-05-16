import uniqid from 'uniqid';

interface ProjectsProps {
    src: string;
    description: string;
}

const ProjectDiv = ({src, description}: ProjectsProps)=>{
    return (
        <div className="project" key={uniqid()}>
            {/* MAKE SURE TO ADD PROJECT NAME HERE AND IN JSON */}            
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
                            src={project.src} 
                            description = {project.description} 
                            />
                })
            }
        </div>
    )
}

export default Projects;