import React from "react";
import "../css/grid.css";
import "../css/main.css"
import cn from "classnames"

export const GridRow = ({children, gridTemplateColumns, gridColumnGap, sc, tc}) => {
    return <div className={cn("row", sc, tc)} style={{gridTemplateColumns, gridColumnGap}}>
        {children}
    </div>
}

export const WhiteSpace = ({size}) => {
    return <div style={{paddingBottom: size}}/>
}

export const PageTitle = ({title, span}) => {
    return <div className="page-title">
        <h2>{title} <span>{span}</span></h2>
    </div>
}

export const BlockTitle = ({title, span}) => {
    return <div className="block-title">
        <h3>{title} <span>{span}</span></h3>
    </div>
}

