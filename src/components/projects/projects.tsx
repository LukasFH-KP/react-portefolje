import { type ProjectProps, Project } from "../project";
import {JSX, useState} from "react";

export type ProjectCollectionProps = {
    items: ProjectProps[]
};

const ProjectCollection = ({ items, ...props }: ProjectCollectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState<object[]>([]);

    function scroll(direction: number) {
        const newIndex = (currentIndex + direction + items.length) % items.length; // Calculates the index of the next project that will be scrolled to
        setAnimation([{ x: direction * -100 }, { x: 0 }]) // Initializes the animation

        setCurrentIndex(newIndex);
    }

    return (
        <div className="Projects">
            <button className="ScrollButton" onClick={() => scroll(-1)}>{"<-"}</button>

            {items.map((item, index) => (
                (index == currentIndex && <Project key={index} {...item} animation={animation} />)
            ))}

            <button className="ScrollButton" onClick={() => scroll( 1)}>{"->"}</button>
        </div>
    )
}


export default ProjectCollection
export { ProjectCollection }