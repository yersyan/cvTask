import React, {useState} from "react";
import "./figures.css";
import img1 from "../../img/portfolio/1.jpg";
import img2 from "../../img/portfolio/2.jpg";
import img3 from "../../img/portfolio/3.jpg";
import img4 from "../../img/portfolio/4.jpg";
import img5 from "../../img/portfolio/5.jpg";
import img6 from "../../img/portfolio/6.jpg";

import cn from "classnames";
import {PortfolioItem} from "./portfolioItem";
import {faFileAlt, faImage, faVideo, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

export const Figures = () => {
    const [portfolioItems] = useState([
        {img: img1, icon: "fa-volume-up", name: "SoundCloud Audio", category: "SoundCloud", address: <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                                                                                                       className="lightbox mfp-iframe"
                                                                                                       title="SoundCloud Audio"/>},
        {img: img2, icon: "fa-file-alt", name: "SoundCloud Audio", category: "SoundCloud", address: <a href="portfolio-1.html"
                                                                                                       className="ajax-page-load"/>},
        {img: img3, icon: "fa-video", name: "SoundCloud Audio", category: "SoundCloud", address: <a href="https://player.vimeo.com/video/158284739"
                                                                                                    className="lightbox mfp-iframe"
                                                                                                    title="Vimeo Video 1"/>},
        {img: img4, icon: "fa-file-alt", name: "SoundCloud Audio", category: "SoundCloud", address: <a href="portfolio-1.html"
                                                                                                       className="ajax-page-load"/>},
        {img: img5, icon: "fa-image", name: "SoundCloud Audio", category: "SoundCloud", address: <a className="lightbox" title="Mockup Design 1"
                                                                                                    href="img/portfolio/full/5.jpg"/>},
        {img: img6, icon: "fa-video", name: "SoundCloud Audio", category: "SoundCloud", address: <a href="https://www.youtube.com/embed/bg0gv2YpIok"
                                                                                                    className="lightbox mfp-iframe"
                                                                                                    title="YouTube Video 1"/>},
    ])


    return <div className="portfolio-grid three-columns">
        {
            portfolioItems.map(p => {
                return <PortfolioItem img={p.img} address={p.address} icon={p.icon} name={p.name} category={p.category}/>
            })
        }

    </div>
}