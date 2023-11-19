import { Outlet } from "react-router-dom";
import CookieManager from "Utils/Storage/CookiesManager";

import PageHeader from "../../Components/PageHeader";

import "./style.scss";

export default function Authentication() {
    const cookies = new CookieManager();

    if (!!cookies.get("X-USER-TOKEN")) {
        window.location.replace("/");
    }

    return (
        <main id="authentication-wrapper">
            <PageHeader />
            <Outlet />
        </main>
    );
}
