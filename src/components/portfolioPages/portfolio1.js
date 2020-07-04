import React, {useEffect, useState} from "react";
import img1 from "../../img/portfolio/full/1.jpg"
import img2 from "../../img/portfolio/full/2.jpg"
import img3 from "../../img/portfolio/full/3.jpg"
import {GridRow} from "../components";
import cn from "classnames"
import {NavLink} from "react-router-dom";

export const PortfolioOne = ({isActivePage, changePage, prevPage, nextPage}) => {
    const [images] = useState([
        {id: 1, img: img1, active: true},
        {id: 2, img: img2, active: false},
        {id: 3, img: img3, active: false}
    ])

    const [isActive, changeStatus] = useState( 1 );


    const prevImg = () => {
        (isActive > 1) && changeStatus(isActive => isActive - 1)
        isActive === 1 && changeStatus(isActive => images.length)
    }
    const nextImg = () => {
        (isActive < images.length) && changeStatus(isActive => isActive + 1)
        isActive === images.length && changeStatus(1)
    }


    const dotClick = (id) => {
        for (let item of images){
            if (id === item.id){
                changeStatus(id)
            }
        }
    }


    return <div id="ajax-page" className={cn("ajax-page-content", "animated-section-moveFromLeft")}>
        <div className="ajax-page-wrapper">
            <div className="ajax-page-nav">
                <div className="nav-item ajax-page-prev-next">
                    <a className="ajax-page-load" href="portfolio-3.html" onClick={prevPage}><i className="lnr lnr-chevron-left"/></a>
                    <a className="ajax-page-load" href="portfolio-2.html" onClick={nextPage}><i className="lnr lnr-chevron-right"/></a>
                </div>
                    <NavLink to="/portfolio" className="nav-item ajax-page-close-button">
                        <a id="ajax-page-close-button" href="#"><i className="lnr lnr-cross"/></a>
                    </NavLink>
            </div>

            <div className="ajax-page-title">
                <h1>Portfolio Project 1</h1>
            </div>

            <GridRow gridTemplateColumns={"2fr 1fr"}>
                <div className="col-sm-8 col-md-8 portfolio-block">
                    <GridRow sc={"owl-carousel"} tc={"portfolio-page-carousel"} gridTemplateColumns={"100%"}>
                        {images.length > 1 && <div className="owl-nav">
                            <div className="owl-prev" onClick={prevImg}/>
                            <div className="owl-next" onClick={nextImg}/>
                        </div>}
                        {images.length > 1 && <div className="owl-dots">
                            {images.map(i => {
                                return <div className={cn("owl-dot", i.active && "active")} onClick={() => dotClick(i.id)}><span/></div>
                            })}
                        </div>}
                        {images.map((i, index) => {
                            return (index >= (isActive - 1) && index < isActive) && <div className="item">
                                <img src={i.img} alt=""/>
                            </div>
                        })}
                    </GridRow>

                    <div className="portfolio-page-video embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item"
                                src="https://player.vimeo.com/video/97102654?autoplay=0"></iframe>
                    </div>


                </div>

                <div className="col-sm-4 col-md-4 portfolio-block">

                    <div className="project-description">
                        <div className="block-title">
                            <h3>Description</h3>
                        </div>
                        <ul className="project-general-info">
                            <li><p><i className="fa fa-user"></i> Alex Smith</p></li>
                            <li><p><i className="fa fa-globe"></i> <a href="#" target="_blank">www.project-site.com</a>
                            </p></li>
                            <li><p><i className="fa fa-calendar"></i> 25 december, 2016</p></li>
                        </ul>

                        <p className="text-justify">Aliquam euismod aliquam massa, quis eleifend dui sodales vitae.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                        <div className="tags-block">
                            <div className="block-title">
                                <h3>Technology</h3>
                            </div>
                            <ul className="tags">
                                <li><a>HTML5</a></li>
                                <li><a>CSS3</a></li>
                                <li><a>jQuery</a></li>
                                <li><a>Ajax</a></li>
                                <li><a>PHP5</a></li>
                            </ul>
                        </div>

                        <div className="btn-group share-buttons">
                            <div className="block-title">
                                <h3>Share</h3>
                            </div>
                            <a href="#" target="_blank" className="btn"><i className="fab fa-facebook-f"></i> </a>
                            <a href="#" target="_blank" className="btn"><i className="fab fa-twitter"></i> </a>
                            <a href="#" target="_blank" className="btn"><i className="fab fa-dribbble"></i> </a>
                        </div>

                    </div>

                </div>
            </GridRow>
        </div>
    </div>
}