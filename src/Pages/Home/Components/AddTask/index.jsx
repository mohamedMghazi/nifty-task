import {useState} from "react";
import API from "../../../../Utils/API";

import Field from "../../../../Components/Field";
import SolidButton from "../../../../Components/SolidButton";

import "./style.scss";

export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const addTask = (e) => {
        e.preventDefault();

        if (taskName.length < 1) {
            return setError("Please enter a task name");
        }

        setLoading(true);
        setError("");

        const { apiResponse } = API({ endpoint: 'tasks/create', method: "POST", data: { title: taskName } });
        apiResponse()
            .then(({ data, status }) => {
                if (status === 200) {
                    // TODO: Re-fetch tasks list
                    setTaskName("");
                } else {
                    setError("Something went wrong, please try again later");
                }
            })
            .catch((e) => {
                console.log(e);
                if (e?.response && e?.response?.data) {
                    const { errors } = e.response.data;
                    setError(errors);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <form id={"add-task-form"} data-testid={"add-task-form"} onSubmit={addTask}>
            <Field
                type={"text"}
                name={"task-name"}
                placeholder={"I plan to do something nifty today!"}
                value={taskName}
                onChange={taskName => setTaskName(taskName)}
                error={error}
            />

            <SolidButton
                type={"submit"}
                title={"Add Task"}
                loading={loading}
            />
        </form>
    );
}
