import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/counter/CounterSlice"
import taskReducer from "./features/task/taskSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;