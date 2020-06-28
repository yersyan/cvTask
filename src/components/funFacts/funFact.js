import React from "react";
import cn from "classnames";

export const FunFact = ({img, title, quantity}) => {
    return <div className={cn("fun-fact", "gray-default")}>
        <i className={`lnr ${img}`}/>
        <h4>{title}</h4>
        <span className="fun-fact-block-value">{quantity}</span>
        <span className="fun-fact-block-text"/>
    </div>
}