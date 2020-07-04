import React from "react";
import cn from "classnames"

export const InfoBlock = ({icon, title, text}) => {

    return <div className="info-block-w-icon">
        <div className="ci-icon">
            <i className={cn("lnr", icon)}/>
        </div>
        <div className="ci-text">
            <h4>{title}</h4>
            <p>
                {text}
            </p>
        </div>
    </div>
}