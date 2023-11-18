import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Reducers/tasksSlice';

const reduxStore = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default reduxStore;
