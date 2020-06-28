import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import {animationsContext} from "../state/state";

let menu = [
    {id: 1, title: "Home", path: "/home", icon: "lnr-home"},
    {id: 2, title: "About", path: "/about", icon: "lnr-user"},
    {id: 3, title: "Resume", path: "/resume", icon: "lnr-graduation-hat"},
    {id: 4, title: "Portfolio", path: "/portfolio", icon: "lnr-briefcase"},
    {id: 5, title: "Blog", path: "/blog", icon: "lnr-book"},
    {id: 6, title: "Contact", path: "/contact", icon: "lnr-envelope"},
]

export const Menu = ({setAnimation}) => {
    const animations = useContext(animationsContext);

    const animation = () => {
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random])
    }

    return <ul className="main-menu">
        {menu.map(m => {
            return <li>
                <NavLink to={m.path} className="nav-anim" activeClassName="active"
                         onClick={() => animation()} >
                    <span className={`menu-icon lnr ${m.icon}`}/>
                    <span className="link-text">{m.title}</span>
                </NavLink>
            </li>
        })}

    </ul>
}

export const ArrowNav = () => {
    const menu = ["/home", "/about"];
    const [to, setTo] = useState(menu[0]);
    const changePage = () => {
        setTo(menu[1])
    }

    return <div className="lmpixels-arrows-nav">
        <NavLink to={to} onClick={changePage}>
            <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"/></div>
        </NavLink>
        <NavLink to="/resume">
            <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"/></div>
        </NavLink>
    </div>
}