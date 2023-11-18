import {Magicpen, Trash} from "iconsax-react";
import "./style.scss";

export default function ListItem() {
    return <div className={"task-item"}>
        <p className={"item-title"}>
            Title
        </p>

        <div className={"item-actions"}>
            <button>
                <Magicpen size={22} />
            </button>
            <button>
                <Trash size={22} />
            </button>
        </div>
    </div>
}
