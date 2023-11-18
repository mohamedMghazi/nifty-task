import API from "../../../API";
import {createAsyncThunk} from "@reduxjs/toolkit";

const APIHandler = (reqOptions = { endpoint: "" }) => {
    const { apiResponse } = new API(reqOptions);
    return apiResponse();
}

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await APIHandler({ endpoint: "tasks" });

        return response.data.tasks;
    } catch (error) {
        throw error;
    }
});

const filterTasks = createAsyncThunk('tasks/filterTasks', async (status = null) => {
    try {
        const response = await APIHandler({ endpoint: !!status.length ? `tasks/?status=${status}` : "tasks" });

        return response.data.tasks;
    } catch (error) {
        throw error;
    }
});

const addTask = createAsyncThunk('tasks/addTask', async ({title}, {dispatch}) => {
    try {
        const response = await APIHandler({ endpoint: "tasks/create", method: "POST", data: { title } });
        dispatch(fetchTasks());
        return response.data;
    } catch (error) {
        throw error;
    }
});

const editTask = createAsyncThunk('tasks/editTask', async ({ taskId, newTitle, newStatus }) => {
    try {
        const response = await APIHandler({ endpoint: `tasks/${taskId}`, method: "PUT", data: { title: newTitle, status: newStatus } });

        return { taskId, updatedData: response.data.task };
    } catch (error) {
        throw error;
    }
});
const deleteTask = createAsyncThunk('tasks/deleteTask', async ({taskId}) => {
    try {
        const response = await APIHandler({ endpoint: `tasks/${taskId}`, method: "DELETE" });

        return { taskId, updatedData: response.data };
    } catch (error) {
        throw error;
    }
});

export { fetchTasks, filterTasks, addTask, editTask, deleteTask };
