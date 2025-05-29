import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import projects from "../../api/data/projects.json";
import {BigProject} from "../components/BigProject";


const Projects = () => {
    const [search] = useSearchParams()

    useEffect(() => {
        if (search.get("p") !== null) {
            document.getElementById(search.get("p"))?.scrollIntoView({behavior: "smooth"})
        }
    }, [search])

    return (
        <div className="AllProjects">
            <h1>All Projects</h1>
            {projects.projects?.map((item) => (
                <div id={item.id.toString()} key={item.id}>
                        <BigProject {...item}/>
                </div>
            ))}
        </div>
    )
}

export default Projects;