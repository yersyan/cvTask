import React, {useContext} from "react";
import "./skills.css"
import {Skill} from "./skill";
import {skillsDataContext} from "../../state/state";
import {BlockTitle, WhiteSpace} from "../components";

export const Skills = () => {
    const skillsData = useContext(skillsDataContext)

    return <div>
        {skillsData.map(s => {
            return <div className="skills-info skills-second-style">
                <BlockTitle title={s.title.mainTitle} span={s.title.spanTitle}/>
                {s.skills.map(s => {
                    return <Skill title={s.title} level={s.level} style={s.style}/>
                })}
                <WhiteSpace size={"10px"}/>
            </div>
        })}
    </div>
}
