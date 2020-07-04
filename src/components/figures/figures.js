import React, {useContext} from "react";
import "./figures.css";
import {PortfolioItem} from "./portfolioItem";
import {portfolioItemsContext} from "../../state/state";
import {NavLink} from "react-router-dom";

export const Figures = ({title}) => {
    const portfolioItems = useContext(portfolioItemsContext)


    return <div className="portfolio-grid three-columns">
        {
            portfolioItems.map(p => {
                if(title === "All"){
                    return <PortfolioItem img={p.img} address={p.address} icon={p.icon} name={p.name}
                                          category={p.category}/>
                }
                if (p.category === title) {
                    return <PortfolioItem img={p.img} address={p.address} icon={p.icon} name={p.name}
                                          category={p.category}/>
                }
            })
        }

    </div>
}