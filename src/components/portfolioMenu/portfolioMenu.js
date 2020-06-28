import React, {useState} from "react";
import "./portfolioMenu.css"

export const PortfolioMenu = () => {
    const [portfolioMenu] = useState([
        {title: "All"},
        {title: "Detailed"},
        {title: "Mockups"},
        {title: "SoundCloud"},
        {title: "Vimeo Videos"},
        {title: "YouTube Videos"},
    ])

    return <ul className="portfolio-filters">
        {portfolioMenu.map(p => {
            return <li>
                <a className="filter btn btn-sm btn-link">{p.title}</a>
            </li>
        })}
    </ul>
}
