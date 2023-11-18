import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Slices/Tasks/reducer';

const reduxStore = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default reduxStore;
