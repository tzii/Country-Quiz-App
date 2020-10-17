import React from "react";
import { connect } from "react-redux";
import { play, end } from "../store/currentStateSlice";
import { getNewQuiz } from "../store/quizSlice";
import { resetResult } from "../store/resultSlice";
import "./NavButton.css";

export const NavButton = ({
    data,
    currentState,
    answerState,
    play,
    end,
    getNewQuiz,
    resetResult,
}) => {
    const startHandler = () => {
        play();
        getNewQuiz(data);
    };

    const nextHandler = () => {
        if (answerState === "TRUE") {
            getNewQuiz(data);
        } else end();
    };

    const againHandler = () => {
        play();
        resetResult();
        getNewQuiz(data);
    };

    if (currentState === "START")
        return (
            <div className="nav-btn">
                {" "}
                <button className="start-btn" onClick={startHandler}>
                    START
                </button>
            </div>
        );
    else if (currentState === "END")
        return (
            <div className="nav-btn">
                <button className="again-btn" onClick={againHandler}>
                    AGAIN
                </button>
            </div>
        );
    else if (answerState === "NONE") return null;
    else
        return (
            <div className="nav-btn">
                <button className="next-btn" onClick={nextHandler}>
                    NEXT
                </button>
            </div>
        );
};

const mapStateToProps = (state) => ({
    data: state.data,
    currentState: state.currentState,
    answerState: state.answerState,
});

const mapDispatchToProps = { play, end, getNewQuiz, resetResult };

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
