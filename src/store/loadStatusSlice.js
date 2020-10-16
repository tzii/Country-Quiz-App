import { createSlice } from "@reduxjs/toolkit";

const loadStatusSlice = createSlice({
    name: "loadStatus",
    initialState: "LOADING",
    reducers: {
        loadSuccessful: () => "SUCCESS",
        loadFailed: () => "ERROR",
    },
});

const { actions, reducer } = loadStatusSlice;
export const { loadSuccessful, loadFailed } = actions;
export { reducer as loadStatusReducer };
