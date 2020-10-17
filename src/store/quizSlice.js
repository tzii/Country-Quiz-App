import { createSlice } from "@reduxjs/toolkit";

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const getChoices = (data) => {
    const res = [];
    for (let i = 0; i < 4; i++) {
        let pos = getRandom(0, data.length);
        while (res.includes(data[pos].name)) pos = getRandom(0, data.length);
        res.push(data[pos].name);
    }
    return res;
};

const quizSlice = createSlice({
    name: "quiz",
    initialState: {},
    reducers: {
        getNewQuiz: (state, action) => {
            let r = getRandom(0, action.payload.length);
            let choices = getChoices(action.payload);
            let res = {
                correctAnswer: choices[getRandom(0, 4)],
                choices,
            };
            if (getRandom(0, 2) === 0) {
                res.type = "CAPITAL";
                res.capital = action.payload[r].capital;
            } else {
                res.type = "FLAG";
                res.flagURL = action.payload[r].flag;
            }
            return res;
        },
    },
});

const { actions, reducer } = quizSlice;
export const { getNewQuiz } = actions;
export { reducer as quizReducer };
