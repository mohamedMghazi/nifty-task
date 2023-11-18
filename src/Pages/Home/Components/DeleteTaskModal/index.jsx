import {useDispatch} from "react-redux";
import {deleteTask} from "Utils/Redux/Slices/Tasks/actions";

import Modal from "Components/Modal";
import SolidButton from "Components/SolidButton";

import "./style.scss";

export default function DeleteTaskModal({ taskID, onClose }) {
    const dispatch = useDispatch();

    return (
        <Modal title={"Delete Task"} onClose={onClose}>
            <p className="delete-confirmation">Are you sure you want to delete this task?</p>

            <div className="delete-confirmation-buttons">
                <SolidButton
                    title={"Delete"}
                    onClick={() => {
                        dispatch(deleteTask({taskId: taskID}));
                    }}
                />

                <SolidButton
                    title={"Cancel"}
                    onClick={onClose}
                />
            </div>
        </Modal>
    )
}
