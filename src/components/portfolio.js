import React, {useState} from "react";
import {GridRow, PageTitle} from "./components";
import {PortfolioMenu} from "./portfolioMenu/portfolioMenu";
import {Figures} from "./figures/figures";
import {Section} from "./section";

export const Portfolio = ({animClass}) => {
    const [title, showItems] = useState("All")


    return <Section animClass={animClass} hoverClass={"animatedHoverSection"}>
       <PageTitle title={"Portfolio"}/>

        <div className="section-content">

            <GridRow>
                <div className="col-xs-12 col-sm-12">

                    <div className="portfolio-content">

                        <PortfolioMenu showItems={showItems} title={title} />

                        <Figures title={title} />
                    </div>

                </div>
            </GridRow>
        </div>
    </Section>
}