import React, {useContext, useEffect, useState} from "react";
import {BlockTitle, GridRow, PageTitle} from "../components";
import cn from "classnames"
import {NavLink} from "react-router-dom";
import {profileContext} from "../../state/state";
import {ImgCarousel} from "../imgCarousel";
import {Paginator} from "./paginator";

export const PortfolioTwo = () => {
    const profile = useContext(profileContext)

    return <div id="ajax-page" className={cn("ajax-page-content", "animated-section-moveFromLeft")} style={{height: '100vh'}}>
        <div className="ajax-page-wrapper">
            <Paginator/>

            <PageTitle title={"Portfolio Project 2"}/>

            <GridRow gridTemplateColumns={"2fr 1fr"}>
                <div className="col-sm-8 col-md-8 portfolio-block">
                    <GridRow sc={"owl-carousel"} tc={"portfolio-page-carousel"} gridTemplateColumns={"100%"}>
                        <ImgCarousel/>
                    </GridRow>

                    {/*<div className="portfolio-page-video embed-responsive embed-responsive-16by9">*/}
                    {/*    <iframe className="embed-responsive-item"*/}
                    {/*            src="https://player.vimeo.com/video/97102654?autoplay=0"></iframe>*/}
                    {/*</div>*/}

                </div>

                <div className="col-sm-4 col-md-4 portfolio-block">

                    <div className="project-description">
                        <BlockTitle title={"Description"}/>
                        <ul className="project-general-info">
                            <li><p><i className="fa fa-user"/>{profile.fullName}</p></li>
                            <li><p><i className="fa fa-globe"/> <a href="#" target="_blank">www.project-site.com</a>
                            </p></li>
                            <li><p><i className="fa fa-calendar"/> 25 december, 2016</p></li>
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
                            <a href="#" target="_blank" className="btn"><i className="fab fa-facebook-f"/> </a>
                            <a href="#" target="_blank" className="btn"><i className="fab fa-twitter"/> </a>
                            <a href="#" target="_blank" className="btn"><i className="fab fa-dribbble"/> </a>
                        </div>

                    </div>

                </div>
            </GridRow>
        </div>
    </div>
}