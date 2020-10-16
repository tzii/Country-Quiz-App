import { createSlice } from "@reduxjs/toolkit";

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const getChoices = (data, correctAnswer) => {
    const hash = { [correctAnswer]: true };
    const res = [{}, {}, {}].map(() => {
        let pos = getRandom(0, data.length);
        while (hash[data[pos]]) pos = getRandom(0, data.length);
        hash[data[pos].name] = true;
        return data[pos].name;
    });
    return [...res, correctAnswer].sort(() => Math.random() - 0.5);
};

const quizSlice = createSlice({
    name: "quiz",
    initialState: {},
    reducers: {
        getNewQuiz: (state, action) => {
            let r = getRandom(0, action.payload.length);
            let res = {
                correctAnswer: action.payload[r].name,
                choices: getChoices(action.payload, action.payload[r].name),
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
