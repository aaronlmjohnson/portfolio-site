import uniqid from 'uniqid';

interface ProjectsProps {
    src: string;
    description: string;
}

const ProjectDiv = ({src, description}: ProjectsProps)=>{
    return (
        <div className="project" key={uniqid()}>
            <img className="project-preview" src="#"></img>
            <p className="project-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor, reiciendis veniam beatae blanditiis optio necessitatibus aut eveniet omnis ipsa, 
                 quis fuga nihil dolore adipisci deleniti iure architecto dolorem sequi labore.
            </p>
        </div>
    )
}

const Projects = (projectsProps: ProjectsProps[])=>{
    return (
        <div id="projects">

        </div>
    )
}

export default Projects;