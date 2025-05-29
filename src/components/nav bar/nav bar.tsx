import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <div className="NavBar">
                <ul className="ContentBox">
                    <li><Link className="NavBarHeader" to="/">HOME</Link></li>
                    <li><Link className="NavBarHeader" to="/about-me">ABOUT ME</Link></li>
                    <li><Link className="NavBarHeader" to="/projects">ALL PROJECTS</Link></li>
                    <li><Link className="NavBarHeader" to="contact">CONTACT ME</Link></li>
                </ul>
                <hr/>
            </div>
        </nav>
    )
}


export default NavBar;
export { NavBar };