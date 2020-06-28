import React from "react";
import "./figures.css";

export const PortfolioItem = ({img, address, icon, name, category}) => {
    return <figure className="item lbaudio" data-groups='["category_all", "category_soundcloud"]'>
        <div className="portfolio-item-img">
            <img src={img} alt="SoundCloud Audio" title=""/>
            {address}
        </div>

        <i className={`fa ${icon}`}/>
        <h4 className="name">{name}</h4>
        <span className="category">{category}</span>
    </figure>
}
