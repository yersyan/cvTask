import React from "react";
import {GridRow, PageTitle} from "./components";
import {PortfolioMenu} from "./portfolioMenu/portfolioMenu";
import {Figures} from "./figures/figures";

export const Portfolio = ({animClass}) => {
    return <section data-id="portfolio"
                    className={`animated-section ${animClass}`}>
       <PageTitle title={"Portfolio"}/>

        <div className="section-content">

            <GridRow>
                <div className="col-xs-12 col-sm-12">

                    <div className="portfolio-content">

                        <PortfolioMenu/>

                        <Figures/>
                    </div>

                </div>
            </GridRow>
        </div>
    </section>
}