import React, {useContext, useState} from "react";
import {BlockTitle} from "../components";
import {knowledgesDataContext} from "../../state/state";

export const Knowledges = () => {
    const knowledgesData = useContext(knowledgesDataContext)
    const title = knowledgesData.title;
    const knowledges = knowledgesData.knowledges

    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <ul className="knowledges">
            {knowledges.map(k => {
                return <li>{k.title}</li>
            })}
        </ul>
    </div>
}