import React, {useContext} from "react";
import {FunFact} from "./funFact";
import {BlockTitle, GridRow, WhiteSpace} from "../components";
import {useMediaQuery} from "react-responsive";
import {factsContext, factsDataContext} from "../../state/state";

export const FunFacts = () => {
    const factsData = useContext(factsDataContext);
    const title = factsData.title;
    const facts = factsData.facts;
    const isSmMobile = useMediaQuery({ query: '(max-width: 575px)' })


    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <GridRow gridTemplateColumns={isSmMobile ? "100%" : "repeat(3, 1fr)"} gridColumnGap={"5%"}>
            {facts.map(f => {
                return <FunFact img={f.img} title={f.title} quantity={f.quantity}/>
            })}
        </GridRow>
    </div>
}
