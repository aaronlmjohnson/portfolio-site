import uniqid from 'uniqid';
import placeholder from '../assets/images/project_image.png';

interface ProjectsProps {
    src: string;
    description: string;
}

const ProjectDiv = ({src, description}: ProjectsProps)=>{
    return (
        <div className="project" key={uniqid()}>
            <img className="project-preview" alt ="#"src={placeholder}></img>
            <p className="project-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor, reiciendis veniam beatae blanditiis optio necessitatibus aut eveniet omnis ipsa, 
                 quis fuga nihil dolore adipisci deleniti iure architecto dolorem sequi labore.
            </p>
        </div>
    )
}

const Projects = (props: any)=>{
    return (
        <div id="projects">
            <h1>Projects</h1>
            {
                [1, 2, 3].map((project: any, i: number)=>{
                    return <ProjectDiv 
                            src={'project.src'} 
                            description = {'project.description'} 
                            />
                })
            }
        </div>
    )
}

export default Projects;