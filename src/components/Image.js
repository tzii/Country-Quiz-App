import React from "react";
import img1 from "../images/1.svg";
import img2 from "../images/win.svg";
import "./Image.css";

export default function Image({ currentState }) {
    if (currentState === "END")
        return <img src={img2} alt="" className="end-img" />;
    else return <img src={img1} alt="" className="play-img" />;
}
