import React from "react";
import { connect } from "react-redux";
import Choice from "./Choice";
import "./Quiz.css";

export const Quiz = ({ quiz }) => {
    const arr = ["A", "B", "C", "D"];

    if (quiz.type === "CAPITAL")
        return (
            <div className="game">
                <h3 className="question">{quiz.capital} is the capital of</h3>
                {quiz.choices.map((choice, i) => (
                    <Choice key={i} ans={arr[i]}>
                        {choice}
                    </Choice>
                ))}
            </div>
        );
    else
        return (
            <div className="game">
                <img src={quiz.flagURL} alt="" className="flag" />
                <h3 className="question">
                    Which country does this flag belong to?
                </h3>
                {quiz.choices.map((choice, i) => (
                    <Choice key={i} ans={arr[i]}>
                        {choice}
                    </Choice>
                ))}
            </div>
        );
};

const mapStateToProps = (state) => ({ quiz: state.quiz });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
