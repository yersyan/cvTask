import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {animationsContext, menuContext} from "../state/state";
import {useMediaQuery} from "react-responsive";


export const Menu = ({setAnimation, open, page, setPage}) => {
    const menu = useContext(menuContext);
    const animations = useContext(animationsContext);
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
    
    const animation = (id) => {
        for (let item of menu) {
            if (id === item.id) {
                item.active = true
            } else {
                item.active = false
            }
        }
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random]);
        !isDesktop && open(false)
        setPage(id)
        if (id === menu.length){
            setPage(0)
        }
    }

    
    
    return <ul className="main-menu">
        {menu.map(m => {
            return <li>
                <NavLink to={m.path} className="nav-anim" activeClassName="active"
                         onClick={() => animation(m.id)}>
                    <span className={`menu-icon lnr ${m.icon}`}/>
                    <span className="link-text">{m.title}</span>
                </NavLink>
            </li>
        })}

    </ul>
}

export const ArrowNav = ({setAnimation, page, setPage}) => {
    const animations = useContext(animationsContext);
    const menu = useContext(menuContext)
    const history = useHistory()

    const forward = () => {
        menu.forEach(function (item, index) {

            if (menu[page] !== undefined) {
                history.push(menu[page].path)
                if (page === menu.length - 1) {
                    setPage(0)
                } else {
                    setPage(page + 1)
                }
            }
        })
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random]);
    }


    const back = () => {
        menu.forEach(function (item,index) {
            if(item.active){
                if(menu[page] !== undefined){
                    history.push(menu[page].path)

                    if (page === 0){
                        setPage(menu.length - 1)
                    }else{
                        setPage(page - 1)
                    }
                }
            }
        })
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random]);
    }

    return <div className="lmpixels-arrows-nav">
        <div className="lmpixels-arrow-right" onClick={forward}>
            <i className="lnr lnr-chevron-right"/>
        </div>

        <div className="lmpixels-arrow-left" onClick={back}>
            <i className="lnr lnr-chevron-left"/>
        </div>
    </div>
}