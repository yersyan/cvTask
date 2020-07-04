import React, {useContext} from "react";
import {TimelineItem} from "./timelineItem";
import {BlockTitle, WhiteSpace} from "../components";
import {timelineDataContext} from "../../state/state";

export const Timeline = () => {
    const timelineData = useContext(timelineDataContext);

    return <div>
        {timelineData.map((t, index) => {
            return <div className="timeline timeline-second-style clearfix">
                <BlockTitle title={t.title.mainTitle} span={t.title.spanTitle}/>
                {t.array.map(t => {
                    return <TimelineItem period={t.period} company={t.company} title={t.title} text={t.text}/>
                })}
                <WhiteSpace size={"50px"}/>
            </div>
        })}
    </div>
}