import React, {useContext, useState} from "react";
import "./certificates.css";
import img from "../../img/clients/client-1.png"
import {CertificateItem} from "./certificateItem";
import {BlockTitle, GridRow} from "../components";
import {useMediaQuery} from "react-responsive";
import {certificatesContext, certificatesDataContext} from "../../state/state";

export const Certificates = () => {
    const certificatesData = useContext(certificatesDataContext);
    const title = certificatesData.title;
    const certificates = certificatesData.certificates;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <GridRow gridTemplateColumns={isMobile ? "100%" : "repeat(2, 1fr"} gridColumnGap={"5%"}>
            {certificates.map(c => {
                return <CertificateItem key={c.id} logo={c.logo} title={c.title} id={c.id} date={c.date} company={c.company}/>
            })}
        </GridRow>
    </div>
}