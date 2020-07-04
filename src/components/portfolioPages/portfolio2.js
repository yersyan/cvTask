import React from "react";

export const PortfolioTwo = () => {
    return <div id="ajax-page" className="ajax-page-content">
        <div className="ajax-page-wrapper">
            <div className="ajax-page-nav">
                <div className="nav-item ajax-page-prev-next">
                    <a className="ajax-page-load" href="portfolio-1.html"><i className="lnr lnr-chevron-left"></i></a>
                    <a className="ajax-page-load" href="portfolio-3.html"><i className="lnr lnr-chevron-right"></i></a>
                </div>
                <div className="nav-item ajax-page-close-button">
                    <a id="ajax-page-close-button" href="#"><i className="lnr lnr-cross"></i></a>
                </div>
            </div>

            <div className="ajax-page-title">
                <h1>Portfolio Project 2</h1>
            </div>

            <div className="row">
                <div className="col-sm-8 col-md-8 portfolio-block">
                    <div className="owl-carousel portfolio-page-carousel">
                        <div className="item">
                            <img src="img/portfolio/full/1.jpg" alt=""/>
                        </div>
                        <div className="item">
                            <img src="img/portfolio/full/2.jpg" alt=""/>
                        </div>
                        <div className="item">
                            <img src="img/portfolio/full/3.jpg" alt=""/>
                        </div>
                    </div>

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
            </div>
        </div>
    </div>
}