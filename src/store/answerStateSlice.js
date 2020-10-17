import { createSlice } from "@reduxjs/toolkit";
import { getNewQuiz } from "./quizSlice";

const answerStateSlice = createSlice({
    name: "answerState",
    initialState: "NONE",
    reducers: {
        trueAnswer: () => "TRUE",
        falseAnswer: () => "FALSE",
    },
    extraReducers: {
        [getNewQuiz]: () => "NONE",
    },
});

const { actions, reducer } = answerStateSlice;
export const { trueAnswer, falseAnswer } = actions;
export { reducer as answerStateReducer };
