import PropTypes from "prop-types";
import {Magicpen, ToggleOff, ToggleOn, Trash} from "iconsax-react";

import "./style.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask} from "../../../../Utils/Redux/Slices/Tasks/actions";

export default function ListItem({ _id, title, status }) {
    const dispatch = useDispatch();

    const [isCompleted, setIsCompleted] = useState(status);

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
            <button title={"Edit"}>
                <Magicpen size={22} />
            </button>
            <button title={"Delete"}>
                <Trash size={22} />
            </button>
        </div>
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
