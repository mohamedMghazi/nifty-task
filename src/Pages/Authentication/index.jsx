import {Outlet} from "react-router-dom";
import "./style.scss";

export default function Authentication() {
    return (
        <main id="authentication-wrapper">
            <Outlet />
        </main>
    )
}
