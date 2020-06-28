import React from "react";

export const TimelineItem = ({period, company, title, text}) => {
    return <div className="timeline-item clearfix">
        <div className="left-part">
            <h5 className="item-period">{period}</h5>
            <span className="item-company">{company}</span>
        </div>
        <div className="divider"/>
        <div className="right-part">
            <h4 className="item-title">{title}</h4>
            <p>{text}</p>
        </div>
    </div>
}
