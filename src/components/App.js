import React, { useEffect } from "react";
import { connect } from "react-redux";
import GameView from "./GameView";
import Footer from "./Footer";
import { loadData } from "../store/dataSlice";

export const App = ({ loadData }) => {
    useEffect(() => {
        loadData();
    });
    return (
        <>
            <GameView />
            <Footer />
        </>
    );
};

const mapDispatchToProps = { loadData };

export default connect(null, mapDispatchToProps)(App);
