import React, {useContext, useState} from "react";
import {BlockTitle, GridRow, PageTitle, WhiteSpace} from "./components";
import {Timeline} from "./timeline/timeline";
import {Skills} from "./skills/skills";
import {Knowledges} from "./knowledges/knowledges";
import {Certificates} from "./certificates/certificates";
import {useMediaQuery} from "react-responsive";
import {
    codingDataContext,
    designDataContext,
    educationDataContext,
    experienceDataContext,
    timelineDataContext
} from "../state/state";

export const Resume = ({animClass}) => {
    const designData = useContext(designDataContext);
    const codingData = useContext(codingDataContext);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return <section data-id="resume"
                    className={`animated-section ${animClass}`}>
        <PageTitle title={"Resume"}/>

        <div className="section-content">
            <GridRow gridTemplateColumns={isMobile ? "100%" : "58% 37%"} gridColumnGap={"5%"}>
                <div>
                    <Timeline/>
                </div>
                <div>
                    <Skills skillsData={designData}/>
                    <Knowledges/>
                </div>
            </GridRow>
            <WhiteSpace size={"50px"}/>
            <Certificates/>
        </div>
    </section>
}