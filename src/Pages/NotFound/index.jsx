import PageHeader from "../../Components/PageHeader";
import DesertIcon from "../../Utils/Assets/Icons/DesertIcon";

import "./style.scss";

export default function NotFound() {
    return <main id="not-found-wrapper">
        <PageHeader />

        <section>
            <DesertIcon />
            <h3>Sorry, dude. I know you are searching for water, but it is a desert here!</h3>
        </section>
    </main>
}
