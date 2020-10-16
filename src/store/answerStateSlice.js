import { createSlice } from "@reduxjs/toolkit";

const answerStateSlice = createSlice({
    name: "answerState",
    initialState: "NONE",
    reducers: {
        trueAnswer: () => "TRUE",
        noAnswer: () => "NONE",
        falseAnswer: () => "FALSE",
    },
});

const { actions, reducer } = answerStateSlice;
export const { trueAnswer, noAnswer, falseAnswer } = actions;
export { reducer as answerStateReducer };
