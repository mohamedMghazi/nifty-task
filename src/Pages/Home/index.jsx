import {useEffect} from "react";
import CookieManager from "../../Utils/Storage/CookiesManager";

import SolidButton from "../../Components/SolidButton";

import "./style.scss";

export default function Home() {
    const cookies = new CookieManager();

    const logout = () => {
        cookies.remove("X-USER-TOKEN");
        cookies.remove("X-USER-DATA");
        window.location.reload();
    }

    useEffect(() => {
        document.body.style.background = "#f4f6f7"
    }, []);

    return (
        <main id={"home-wrapper"}>
            <nav>
                <h1>NiftyTask</h1>

                <SolidButton
                    title={"Logout"}
                    onClick={logout}
                />
            </nav>

            <section>
                <h1>Home</h1>
            </section>
        </main>
    );
}
