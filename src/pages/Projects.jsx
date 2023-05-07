import { useState, useEffect } from "react";



function Projects(props) {

    const [projects, setProjects] = useState(null)

    async function getProjectsData(){
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
        console.log(data)
    }

    

    function loaded(){
        return projects.map((project) => 
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt=""/>
                <a href={project.git}><button>Github</button></a>
                <a href={project.live}><button>Live Site</button></a>
            </div>
        )
    }

    useEffect(() => { getProjectsData() }, [])



    return (
        projects ? loaded() : <h1>Loading...</h1>
    );
  }
  
  export default Projects;
  