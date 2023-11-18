import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask} from "../../../../Utils/Redux/Slices/Tasks/actions";

import Modal from "Components/Modal";
import SolidButton from "Components/SolidButton";
import Field from "Components/Field";

import "./style.scss";

export default function EditTaskModal({ taskID, taskName, onClose }) {
    const dispatch = useDispatch();

    const [newTaskName, setNewTaskName] = useState(taskName);
    const [isNameChanged, setIsNameChanged] = useState(taskName !== newTaskName);

    const handleNameChange = (newTitle) => {
        setNewTaskName(newTitle);
        setIsNameChanged(taskName !== newTitle);
    }

    const handleEditTask = () => {
        if (newTaskName === taskName) {
            return setIsNameChanged(false);
        }

        dispatch(editTask({taskId: taskID, newTitle: newTaskName}));
        onClose();
    }

    return (
        <Modal title={"Update Task"} onClose={onClose}>
            <p className="update-confirmation">What do you plan to rename this nifty task?</p>

            <form action="">
                <Field
                    label={"New Task Name"}
                    name={"new-task-name"}
                    type={"text"}
                    placeholder={"Enter new task name"}
                    value={newTaskName}
                    onChange={handleNameChange}
                />

                <div className="delete-confirmation-buttons">
                    <SolidButton
                        title={"Save"}
                        type={"submit"}
                        disabled={!isNameChanged}
                        onClick={handleEditTask}
                    />

                    <SolidButton
                        title={"Keep it!"}
                        onClick={onClose}
                    />
                </div>
            </form>
        </Modal>
    )
}
