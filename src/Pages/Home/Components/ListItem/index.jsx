import {useState} from "react";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {editTask} from "Utils/Redux/Slices/Tasks/actions";

import {Magicpen, ToggleOff, ToggleOn, Trash} from "iconsax-react";
import DeleteTaskModal from "../DeleteTaskModal";
import EditTaskModal from "../EditTaskModal";

import "./style.scss";

export default function ListItem({ _id, title, status }) {
    const dispatch = useDispatch();

    const [isCompleted, setIsCompleted] = useState(status);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleCompleteStatus = () => {
        dispatch(editTask({taskId: _id, newStatus: !isCompleted }));
        setIsCompleted(prevState => !prevState);
    }

    return <div className={"task-item"}>
        <p className={"item-title"} data-completed={status} title={title}>
            {title}
        </p>

        <div className={"item-actions"}>
            <button onClick={toggleCompleteStatus}>
                {isCompleted ?
                    <ToggleOn variant={"Bold"} size={22} /> :
                    <ToggleOff size={22}/>
                }
            </button>
            <button title={"Edit"} onClick={() => setIsEditModalOpen(true)}>
                <Magicpen size={22} />
            </button>
            <button title={"Delete"} onClick={() => setIsDeleteModalOpen(true)}>
                <Trash size={22} />
            </button>
        </div>

        {isDeleteModalOpen &&
            <DeleteTaskModal
                taskID={_id}
                onClose={() => setIsDeleteModalOpen(false)}
            />
        }

        {isEditModalOpen &&
            <EditTaskModal
                taskID={_id}
                taskName={title}
                onClose={() => setIsEditModalOpen(false)}
            />
        }
    </div>
}

ListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

ListItem.defaultProps = {
    _id: "1",
    title: "Nifty Task #1",
    status: false
}
