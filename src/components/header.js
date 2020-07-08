import React from "react";
import {Menu} from "./menu";
import {SocialLinks} from "./socialLinks";
import {Profile} from "./profile";
import {Copyrights} from "./copyrights";
import {Link} from "react-router-dom";


export const Header = ({setAnimation, open, setPage}) => {

    return <header id="site_header" className="header mobile-menu-hide">
        <Profile/>

        <Menu setAnimation={setAnimation} open={open} setPage={setPage}/>

        <SocialLinks/>

        <div className="header-buttons">
            <Link to="/files/CV.pdf" target="_blank" className="btn btn-primary" download>Download CV</Link>
        </div>

       <Copyrights/>
    </header>
}

