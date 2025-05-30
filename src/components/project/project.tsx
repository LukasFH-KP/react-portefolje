import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export type ProjectProps = {
    name: string,
    description: string,
    long_description: string,
    thumbnail_path: string,
    external_links: object[],
    id: number
}


const Project = ({ name, description, thumbnail_path, id, animation }: ProjectProps)=> {
    return (
        <motion.div className="Project" style={animation[0]} animate={animation[1]}>
            <img src={"./" + thumbnail_path} alt=""/>
            <div className="VR"></div>
            <div className="ContentBox">
                <h2>{name}</h2>
                <hr/>

                <div className="DescriptionBox">
                    <span>{description}</span>
                </div>

                <hr/>
                <Link to={`/projects?p=${id}`}>Read more</Link>
            </div>
        </motion.div>
    )
}

export default Project;
export { Project };