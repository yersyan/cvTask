import React, {useContext} from "react";
import {infoDataContext} from "../state/state";
import {GridRow} from "./components";
import {useMediaQuery} from "react-responsive";

export const InfoList = () => {
    const infoData = useContext(infoDataContext);
    const isSmMobile = useMediaQuery({query: '(max-width: 575px)'})

    return <GridRow gridTemplateColumns={isSmMobile ? "100%" : "57% 38%"} gridColumnGap={"5%"}>
        <p>
            {infoData.infoText}
        </p>
        <div className="info-list">
            <ul>
                {infoData.infoList.map(info => {
                    return <li key={info.title}>
                        <span className="title">{info.title}</span>
                        <span className="value">{info.value}</span>
                    </li>
                })}
            </ul>
        </div>
    </GridRow>
}
