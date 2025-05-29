import { ProjectCollection } from "../components/projects";
import projects from "../../api/data/projects.json";


const Home = () => {
    return (
        <div>
            {projects.projects && <ProjectCollection items={projects.projects}/>}
        </div>
    )
}

export default Home;