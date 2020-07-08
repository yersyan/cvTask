import React, {useContext} from "react";
import "./figures.css";
import {PortfolioItem} from "./portfolioItem";
import {portfolioItemsContext} from "../../state/state";
import {NavLink} from "react-router-dom";

export const Figures = ({title}) => {
    const portfolioItems = useContext(portfolioItemsContext)

    const animations = [
        "animated-section-rotateCarouselLeftIn",
        "animated-section-rotateCarouselRightIn",
        "animated-section-rotateCarouselBottomIn"
    ]

    return <div className="portfolio-grid three-columns">
        {
            portfolioItems.map(p => {
                let random = parseInt(Math.floor(Math.random() * 3));
                if(title === "All"){
                    return <PortfolioItem img={p.img} source={p.source} icon={p.icon} name={p.name}
                                          category={p.category} clNm={animations[random]}/>
                }
                if (p.category === title) {
                    return <PortfolioItem img={p.img} source={p.source} icon={p.icon} name={p.name}
                                          category={p.category} clNm={animations[random]}/>
                }
            })
        }

    </div>
}