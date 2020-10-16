import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPoint } from "../store/resultSlice";
import { trueAnswer, falseAnswer } from "../store/answerStateSlice";
import "./Choice.css";
import { Add, Check } from "@material-ui/icons";

export const Choice = ({
    ans,
    children,
    correctAns,
    getPoint,
    answerState,
    trueAnswer,
    falseAnswer,
}) => {
    const [ticked, changeTicked] = useState(false);

    useEffect(() => {
        if (answerState === "NONE") changeTicked(false);
    }, [answerState]);

    const choiceHandler = () => {
        if (correctAns === children) {
            getPoint();
            setTimeout(trueAnswer, 1000);
        } else setTimeout(falseAnswer, 1000);
        changeTicked(true);
    };

    const classBtn = () => {
        return (
            "choice" +
            (answerState !== "NONE" && correctAns === children ? " true" : "") +
            (ticked ? " tick" : "")
        );
    };

    const icon = () => {
        if (answerState !== "NONE") {
            if (correctAns === children) return <Check />;
            else if (ticked)
                return <Add style={{ transform: "rotate(45deg)" }} />;
        } else return null;
    };

    return (
        <button
            className={classBtn()}
            onClick={choiceHandler}
            disabled={answerState !== "NONE"}
        >
            <span>{ans}</span>
            <span>{children}</span>
            {icon()}
        </button>
    );
};

const mapStateToProps = (state) => ({
    correctAns: state.quiz.correctAnswer,
    answerState: state.answerState,
});

const mapDispatchToProps = { getPoint, trueAnswer, falseAnswer };

export default connect(mapStateToProps, mapDispatchToProps)(Choice);
