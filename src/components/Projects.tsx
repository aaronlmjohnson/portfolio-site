import uniqid from 'uniqid';

const ProjectDiv = ()=>{
    return (
        <div className="project" key={uniqid()}>
            <img className="project-preview"></img>
            <p className="project-description"></p>
        </div>
    )
}

const Projects = ()=>{
    return (
        <div id="projects">
            
        </div>
    )
}

export default Projects;