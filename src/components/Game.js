import React from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import "./Game.css";

export const Game = ({ currentState, result }) => {
    if (currentState === "START") return null;
    else if (currentState === "PLAY") return <Quiz />;
    else if (currentState === "END")
        return (
            <div className="result">
                <h3 className="title">Results</h3>
                <p className="content">
                    You got<span> {result} </span>correct answers
                </p>
            </div>
        );
};

const mapStateToProps = (state) => ({
    currentState: state.currentState,
    result: state.result,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
