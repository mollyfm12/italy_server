import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./css/Layout.css";

//what all the pages will look like

const Layout = () => {
    return (
        <>
            <Header />
            <Nav />

            <Outlet /> 
        </>
    );
};

export default Layout;