import {useEffect} from "react";

import CookieManager from "Utils/Storage/CookiesManager";

import AddTask from "./Components/AddTask";
import SolidButton from "../../Components/SolidButton";

import "./style.scss";
import TasksContainer from "./Containers/TasksContainer";

export default function Home() {
    const cookies = new CookieManager();

    const logout = () => {
        cookies.remove("X-USER-TOKEN");
        cookies.remove("X-USER-DATA");
        window.location.reload();
    }

    useEffect(() => {
        document.body.style.background = "#f4f6f7";
    }, []);

    return (
        <div id={"home-wrapper"} data-testid={"home-wrapper"}>
            <nav>
                <h1>NiftyTask</h1>

                <SolidButton
                    title={"Logout"}
                    onClick={logout}
                />
            </nav>

            <main id={"home-container"}>
                <header>
                    <AddTask />
                </header>

                <TasksContainer />
            </main>
        </div>
    );
}
