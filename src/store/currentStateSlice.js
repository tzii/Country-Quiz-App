import { createSlice } from "@reduxjs/toolkit";

const currentStateSlice = createSlice({
    name: "currentState",
    initialState: "START",
    reducers: {
        play: () => "PLAY",
        end: () => "END",
    },
});

const { actions, reducer } = currentStateSlice;
export const { play, end } = actions;
export { reducer as currentStateReducer };
