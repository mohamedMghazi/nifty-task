import PropTypes from "prop-types";
import {Magicpen, Trash} from "iconsax-react";

import "./style.scss";

export default function ListItem({ _id, title, completed }) {
    return <div className={"task-item"}>
        <p className={"item-title"} data-completed={completed} title={title}>
            {title}
        </p>

        <div className={"item-actions"}>
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
    completed: PropTypes.bool.isRequired
}

ListItem.defaultProps = {
    _id: "1",
    title: "Nifty Task #1",
    completed: false
}
