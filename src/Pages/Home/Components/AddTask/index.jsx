import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addTask} from "Utils/Redux/Slices/Tasks/actions";

import Field from "Components/Field";
import SolidButton from "Components/SolidButton";

import "./style.scss";

export default function AddTask() {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.tasks);
    const [internalError, setInternalError] = useState("");

    const [taskName, setTaskName] = useState("");

    const handleTaskSubmit = (e) => {
        e.preventDefault();

        if (taskName.length < 1) {
            return setInternalError("Please enter a task name");
        }

        dispatch(addTask({ title: taskName }));
        setTaskName("");
        setInternalError("");
    }

    return (
        <form id={"add-task-form"} data-testid={"add-task-form"} onSubmit={handleTaskSubmit}>
            <Field
                type={"text"}
                name={"task-name"}
                placeholder={"I plan to do something nifty today!"}
                value={taskName}
                onChange={taskName => setTaskName(taskName)}
                error={error || internalError}
            />

            <SolidButton
                type={"submit"}
                title={"Add Task"}
                loading={status === "loading"}
            />
        </form>
    );
}
