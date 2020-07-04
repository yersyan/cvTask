import React, {useContext} from "react";
import {infoDataContext} from "../../state/state";
import {InfoBlock} from "./infoBlock";
import {useMediaQuery} from "react-responsive";
import {BlockTitle, GridRow} from "../components";

export const InfoListWIcon = () => {
    const infoDate = useContext(infoDataContext)
    const title = infoDate.infoListWIconData.title
    const isSmMobile = useMediaQuery({ query: '(max-width: 575px)' })

    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <GridRow gridTemplateColumns={isSmMobile ? "100%" : "repeat(2, 1fr)"}>
            {infoDate.infoListWIconData.infoListWIcon.map(info => {
                return <InfoBlock icon={info.icon} title={info.title} text={info.text}/>
            })}
        </GridRow>
    </div>

}