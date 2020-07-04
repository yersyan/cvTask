import React, {useContext} from "react";
import {copyrightsContext} from "../state/state";

export const Copyrights = () => {
    const copyrights = useContext(copyrightsContext)

    return  <div className="copyrights">{`© ${copyrights.date}  ${copyrights.text}`}</div>
}