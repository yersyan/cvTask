import React from "react";
import "./figures.css";
import {NavLink} from "react-router-dom";

export const PortfolioItem = ({img, address, icon, name, category}) => {

    if (category === "Detailed"){
        return <NavLink to="/portfolio/portfolio-1">
            <figure className="item lbaudio">
                <div className="portfolio-item-img">
                    <img src={img} alt="SoundCloud Audio" title=""/>
                    {address}
                </div>

                <i className={`fa ${icon}`}/>
                <h4 className="name">{name}</h4>
                <span className="category">{category}</span>
            </figure>
        </NavLink>
    }


    return <figure className="item lbaudio">
            <div className="portfolio-item-img">
                <img src={img} alt="SoundCloud Audio" title=""/>
                {address}
            </div>

            <i className={`fa ${icon}`}/>
            <h4 className="name">{name}</h4>
            <span className="category">{category}</span>
        </figure>


}
