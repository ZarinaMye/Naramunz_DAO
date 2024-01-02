import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Layout.css"

export function Layout() {

    return(
        <div className="wrapper">
        <header><Navigation /></header>
        <main>
            <Outlet />
        </main>
        </div>
    );
};