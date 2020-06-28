import React from "react";
import "./skills.css"
import {Skill} from "./skill";

export const Skills = ({skillsData}) => {

    return <div className="skills-info skills-second-style">
        {skillsData.map(s => {
            return <Skill title={s.title} level={s.level} style={s.style}/>
        })}
    </div>
}
