import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: "result",
    initialState: 0,
    reducers: {
        getPoint: (state) => state + 1,
        resetResult: () => 0,
    },
});

const { actions, reducer } = resultSlice;
export const { getPoint, resetResult } = actions;
export { reducer as resultReducer };
