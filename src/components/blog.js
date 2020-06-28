import React from "react";
import {GridRow, PageTitle} from "./components";
import {BlogCards} from "./blogCards/blogCards";

export const Blog = ({animClass}) => {
    return <section data-id="blog" className={`animated-section ${animClass}`}>
        <PageTitle title={"Blog"}/>

        <div className="section-content">
            <GridRow className="row">
                <div className="col-xs-12 col-sm-12">
                    <BlogCards/>
                </div>
            </GridRow>
        </div>


    </section>
}