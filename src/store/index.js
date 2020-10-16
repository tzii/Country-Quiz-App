import { configureStore } from "@reduxjs/toolkit";
import { currentStateReducer } from "./currentStateSlice";
import { resultReducer } from "./resultSlice";
import { dataReducer } from "./dataSlice";
import { loadStatusReducer } from "./loadStatusSlice";
import { quizReducer } from "./quizSlice";
import { answerStateReducer } from "./answerStateSlice";

const store = configureStore({
    reducer: {
        currentState: currentStateReducer,
        result: resultReducer,
        data: dataReducer,
        loadStatus: loadStatusReducer,
        quiz: quizReducer,
        answerState: answerStateReducer,
    },
});
export default store;
