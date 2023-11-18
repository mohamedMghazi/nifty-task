import { createSlice } from '@reduxjs/toolkit';
import {addTask, editTask, fetchTasks, filterTasks} from "./actions";

const tasksReducer = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(filterTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(filterTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(filterTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { taskId, updatedData } = action.payload;
                const editedTaskIndex = state.tasks.findIndex((task) => task.id === taskId);
                state.tasks[editedTaskIndex] = updatedData;
            })
            .addCase(editTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tasksReducer.reducer;
