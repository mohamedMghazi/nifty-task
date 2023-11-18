import API from "../../../API";
import {createAsyncThunk} from "@reduxjs/toolkit";

const APIHandler = (reqOptions = { endpoint: "" }) => {
    const { apiResponse } = new API(reqOptions);
    return apiResponse();
}

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await APIHandler({ endpoint: "tasks" });

        if (response.status !== 200)
            throw new Error(response.errors);

        return response.data;
    } catch (error) {
        throw error;
    }
});

const filterTasks = createAsyncThunk('tasks/filterTasks', async (status = null) => {
    try {
        const response = await APIHandler({ endpoint: "" });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
    try {
        const response = await APIHandler({ endpoint: "" });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const editTask = createAsyncThunk('tasks/editTask', async ({ taskId, newTitle, newStatus }) => {
    try {
        const response = await APIHandler({ endpoint: "" });
        console.log(response);
        return { taskId, updatedData: response.data };
    } catch (error) {
        throw error;
    }
});

export { fetchTasks, filterTasks, addTask, editTask };
