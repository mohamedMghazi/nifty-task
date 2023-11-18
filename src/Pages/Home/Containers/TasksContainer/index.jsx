import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchTasks} from "Utils/Redux/Slices/Tasks/actions";

import LoadingIndicator from "Components/LoadingIndicator";
import ListTopBar from "../../Components/ListTopBar";
import ListHeader from "../../Components/ListHeader";
import ListItem from "../../Components/ListItem";

import "./style.scss";

export default function TasksContainer() {
    const dispatch = useDispatch();
    const { tasks, status, error } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (error) {
        return <p className={"page-error"}>{error}</p>
    }

    return <section id="tasks-container">
        <ListTopBar />

        {status !== "succeeded" ?
            <LoadingIndicator size={25} /> :
            <main id={"tasks-list-container"}>
                <ListHeader />

                <div className="list-items-wrapper">
                    {tasks.map(task => {
                        return <ListItem key={task._id} {...task} />
                    })}
                </div>
            </main>
        }
    </section>
}
