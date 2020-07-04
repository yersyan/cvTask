import React, {useContext} from "react";
import "./portfolioMenu.css"
import {portfolioMenuContext} from "../../state/state";

export const PortfolioMenu = ({showItems}) => {
    const portfolioMenu = useContext(portfolioMenuContext)

    return <ul className="portfolio-filters">
        {portfolioMenu.map(p => {
            return <li onClick={() => showItems(p.title)}>
                <a className="filter btn btn-sm btn-link">{p.title}</a>
            </li>
        })}
    </ul>
}
