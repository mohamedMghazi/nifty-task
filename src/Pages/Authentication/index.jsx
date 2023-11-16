import {Outlet} from "react-router-dom";
import PageHeader from "./Components/PageHeader";
import "./style.scss";

export default function Authentication() {
    return (
        <main id="authentication-wrapper">
            <PageHeader />
            <Outlet />
        </main>
    )
}
