import React from "react";
import "./skills.css";

export const Skill = ({title, level, style}) => {
    return <div>
        <div className="skill clearfix">
            <h4>{title}</h4>
            <div className="skill-value">{level}</div>
        </div>
        <div className={`skill-container ${style}`}>
            <div className="skill-percentage"/>
        </div>
    </div>
}
