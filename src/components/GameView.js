import React from "react";
import { connect } from "react-redux";
import "./GameView.css";
import Image from "./Image";
import Game from "./Game";
import NavButton from "./NavButton";

export const GameView = ({ currentState }) => {
    return (
        <div className="game-view">
            <h2>COUNTRY QUIZ</h2>
            <Image currentState={currentState} />
            <Game />
            <NavButton />
        </div>
    );
};

const mapStateToProps = (state) => ({ currentState: state.currentState });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
