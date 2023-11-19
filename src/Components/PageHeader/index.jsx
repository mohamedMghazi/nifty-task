import {Link} from "react-router-dom";
import "./style.scss";

export default function PageHeader () {
    return (
        <header className={"page-header-container"}>
            <Link to="/">NiftyTask</Link>
        </header>
    )
}
