import "./style.scss";

export default function ListItem() {
    return <div className={"task-item"}>
        <p className={"item-title"}>
            Title
        </p>

        <div className={"item-actions"}>
            <button>√</button>
            <button>√</button>
        </div>
    </div>
}
