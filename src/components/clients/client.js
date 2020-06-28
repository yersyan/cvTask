import React from "react";

export const Client = ({img}) => {
    return <div className="client-block">
        <a href="/#" target="_blank" title="Logo">
            <img src={img} alt="Logo"/>
        </a>
    </div>
}
