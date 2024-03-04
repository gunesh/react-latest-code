import * as React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

function Layout() {
    return (
        <div>


            <ul>
                <li>
                    <Link to="/">Public Pageggg</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}


export { Layout } 