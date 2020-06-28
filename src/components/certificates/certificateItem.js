import React from "react";
import "./certificates.css";


export const CertificateItem = ({logo, title, id, date, company}) => {
    return <div className="certificate-item clearfix">
        <div className="certi-logo">
            <img src={logo} alt="logo"/>
        </div>

        <div className="certi-content">
            <div className="certi-title">
                <h4>{title}</h4>
            </div>
            <div className="certi-id">
                <span>{id}</span>
            </div>
            <div className="certi-date">
                <span>{date}</span>
            </div>
            <div className="certi-company">
                <span>{company}</span>
            </div>
        </div>
    </div>
}