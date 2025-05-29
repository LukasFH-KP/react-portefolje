import { NavBar } from "../components/nav bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar/>

            <div className="Content">
                <Outlet/>
            </div>

            <footer className="Footer">
                <p>Contact</p>
                <p>noname@nodomain.no</p>
                <p>+0 000 00 000</p>
            </footer>
        </>
    )
}

export default Layout;