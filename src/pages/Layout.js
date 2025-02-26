import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                    </li>
                    <li>
                        <Link to="/contactform">Contact</Link>&nbsp;&nbsp;
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;
