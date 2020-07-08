import React, {useContext, useState} from "react";
import "./portfolioMenu.css"
import {portfolioMenuContext} from "../../state/state";

export const PortfolioMenu = ({showItems, title, setTransformAnim}) => {

    const portfolioMenu = useContext(portfolioMenuContext)

    return <ul className="portfolio-filters">
        {portfolioMenu.map(p => {
            return <li onClick={() => showItems(p.title)}>
                <a className="filter btn btn-sm btn-link" style={{color: title === p.title && '#fff'}}>{p.title}</a>
            </li>
        })}
    </ul>
}
