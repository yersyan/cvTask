import React from "react";
import headerImg from "../img/main_photo.jpg";
import {NavLink} from "react-router-dom";
import {Menu} from "./menu";

export const Header = ({setAnimation}) => {

    return <header id="site_header" className="header mobile-menu-hide">
        <div className="header-content">
            <div className="header-photo">
                <img src={headerImg} alt="Alex Smith"/>
            </div>
            <div className="header-titles">
                <h2>Alex Smith</h2>
                <h4>Web Designer</h4>
            </div>
        </div>

        <Menu setAnimation={setAnimation}/>

        <div className="social-links">
            <ul>
                <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"/></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
            </ul>
        </div>

        <div className="header-buttons">
            <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
        </div>

        <div className="copyrights">© 2020 All rights reserved.</div>
    </header>
}

