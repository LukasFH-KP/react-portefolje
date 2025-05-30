import { type ProjectProps } from "../project";
import "./BigProject.css";
import projects from "../../../api/data/projects.json";


const BigProject = ({ name, description, long_description, thumbnail_path, external_links, id, ...props }: ProjectProps) => {
    long_description = long_description ? long_description : description

    return (
        <div className="BigProject">
            <div className="TitleBox">
                <h1>{name}</h1>
            </div>

            <hr/>

            <div className="ContentBox">
                <img className="Thumbnail" src={"/" + thumbnail_path} alt=""/>
                <div className="VR"/>

                <div className="DescriptionBox">
                    {long_description}
                </div>
            </div>

            <hr/>

            <div className="ExternalLinks">
                {external_links?.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target="_blank" rel="noreferrer">
                        <img className="LinkImage" src={projects.link_images[link.type]} alt=""/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export { BigProject }