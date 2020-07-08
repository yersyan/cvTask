import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {animationsContext, menuContext} from "../state/state";
import {useMediaQuery} from "react-responsive";


export const Menu = ({setAnimation, open, setPage}) => {
    const menu = useContext(menuContext);
    const animations = useContext(animationsContext);
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
    
    const animation = (id, newDirection) => {
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random]);
        !isDesktop && open(false)
        setPage([id, 0])
    }


    return <ul className="main-menu">
        {menu.map(m => {
            return <li>
                <NavLink to={m.path} className="nav-anim" activeClassName="active"
                         onClick={() => animation(m.id - 1)}
                >
                    <span className={`menu-icon lnr ${m.icon}`}/>
                    <span className="link-text">{m.title}</span>
                </NavLink>
            </li>
        })}

    </ul>
}
