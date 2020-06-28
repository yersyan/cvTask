import React from "react";
import {TimelineItem} from "./timelineItem";

export const Timeline = ({timelineData}) => {

    return <div className="timeline timeline-second-style clearfix">
        {timelineData.map(t => {
            return <TimelineItem period={t.period} company={t.company} title={t.title} text={t.text}/>
        })}
    </div>
}