import React from "react";
import {GridRow, PageTitle} from "./components";
import {BlogCards} from "./blogCards/blogCards";
import {Section} from "./section";

export const Blog = ({animClass}) => {
    return <Section animClass={animClass} hoverClass={"animatedHoverSection"}>
        <PageTitle title={"Blog"}/>
        <div className="section-content">
            <GridRow className="row">
                <div className="col-xs-12 col-sm-12">
                    <BlogCards/>
                </div>
            </GridRow>
        </div>
    </Section>
}