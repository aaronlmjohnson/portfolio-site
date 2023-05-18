import uniqid from 'uniqid';

interface ProjectsProps {
    name: string;
    links: any;
    src: string;
    description: string;
}

interface ProjectLinkProps {
    siteName: string;
    link: string;
}

const ProjectLink = ({siteName, link}: ProjectLinkProps)=>{
    return (
        <li>
            <a target="_blank" rel= "noopener noreferrer" href={link}> {siteName} </a>
        </li>
    )
}
const ProjectLinks = (props: any)=>{
    const links = props.links;
    return (
        <ul className="project-links"> 
            {
                Object.keys(links).map((key)=> 
                    <ProjectLink siteName ={key} link={links[key]} key={uniqid()} />)
            }
        </ul>
    )
}


const ProjectDiv = ({name, links, src, description}: ProjectsProps)=>{
    return (
        <div className="project">
            <h1>{name}</h1>          
            <img className="project-preview" alt ="#"src={src} width="800px"></img>
            <p className="project-description">
                {description}
            </p>
            <ProjectLinks links={links} key={uniqid()}/>
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
                            key={uniqid()}
                            />
                })
            }
        </div>
    )
}

export default Projects;