import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

//what all the pages will look like

const Layout = () => {
    return (
        <>
            <Header />
            <nav>
                <ul>
                    <li> <Link to ="/">Home</Link> </li>
                    <li> <Link to ="/Florence">Florence</Link> </li>
                    <li> <Link to ="/Italy">Around Italy</Link> </li>
                    <li> <Link to ="/Euro">Around Europe & Africa</Link> </li>
                    <li> <Link to ="/FAQ">FAQ</Link> </li>
                </ul>
            </nav>

            <Outlet /> 
        </>
    );
};

export default Layout;