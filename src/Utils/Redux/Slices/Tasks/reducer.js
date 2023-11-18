import {createSlice} from '@reduxjs/toolkit';
import {addTask, deleteTask, editTask, fetchTasks, filterTasks} from "./actions";

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
                state.error = "An error occurred while fetching tasks. Please try again later.";
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
                state.error = "An error occurred while fetching tasks. Please try again later.";
            })
            .addCase(addTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(addTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = "An error occurred while adding task. Please try again later.";
            })
            .addCase(editTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { taskId, updatedData } = action.payload;
                state.tasks = state.tasks.map((task) => task._id === taskId ? updatedData : task);
            })
            .addCase(editTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = "An error occurred while editing task. Please try again later.";
            })
            .addCase(deleteTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { taskId } = action.payload;
                state.tasks = state.tasks.filter((task) => task._id !== taskId);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = "An error occurred while editing task. Please try again later.";
            });
    },
});

export default tasksReducer.reducer;
