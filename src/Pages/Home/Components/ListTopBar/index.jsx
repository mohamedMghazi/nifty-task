import "./style.scss";

export default function ListTopBar() {
    return (
        <header className="list-top-bar">
            <h3 className="top-bar-title">Tasks List</h3>

            <select defaultValue={"all"}>
                <option value={""}>All</option>
                <option value={"true"}>Completed</option>
                <option value={"false"}>Uncompleted</option>
            </select>
        </header>
    );
}
