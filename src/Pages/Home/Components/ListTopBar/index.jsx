import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterTasks} from "../../../../Utils/Redux/Slices/Tasks/actions";

import "./style.scss";

export default function ListTopBar() {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.tasks);

    const [selectedOption, setSelectedOption] = useState("");

    const handleFilter = (e) => {
        setSelectedOption(e.target.value);
        dispatch(filterTasks(e.target.value));
    }

    return (
        <header className="list-top-bar">
            <h3 className="top-bar-title">Tasks List</h3>

            <select
                disabled={status === "loading"}
                defaultValue={selectedOption}
                onChange={handleFilter}
                title={"Filter tasks"}
            >
                <option value={""}>All</option>
                <option value={"true"}>Completed</option>
                <option value={"false"}>Uncompleted</option>
            </select>
        </header>
    );
}
