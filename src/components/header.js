import React from "react";
import {Menu} from "./menu";
import {SocialLinks} from "./socialLinks";
import {Profile} from "./profile";
import {Copyrights} from "./copyrights";

export const Header = ({setAnimation, open, page, setPage}) => {

    return <header id="site_header" className="header mobile-menu-hide">
        <Profile/>

        <Menu setAnimation={setAnimation} open={open} page={page} setPage={setPage}/>

        <SocialLinks/>

        <div className="header-buttons">
            <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
        </div>

       <Copyrights/>
    </header>
}

