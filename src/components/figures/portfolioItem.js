import React from "react";
import "./figures.css";
import {NavLink} from "react-router-dom";

export const PortfolioItem = ({img, source, icon, name, category}) => {

    if (category === "Detailed"){
        return <NavLink to={source.address}>
            <figure className="item lbaudio">
                <div className="portfolio-item-img">
                    <img src={img} alt="SoundCloud Audio" title=""/>
                    <a
                        href={source.address}
                        className={source.cn}
                        title={source.title}
                        target={source.target}
                    />
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
                <a
                    href={source.address}
                    className={source.cn}
                    title={source.title}
                    target={source.target}
                />
            </div>

            <i className={`fa ${icon}`}/>
            <h4 className="name">{name}</h4>
            <span className="category">{category}</span>
        </figure>


}
