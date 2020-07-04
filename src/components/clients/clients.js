import React, {useContext, useState} from "react";
import logo1 from "../../img/clients/client-1.png";
import logo2 from "../../img/clients/client-2.png";
import logo3 from "../../img/clients/client-3.png";
import logo4 from "../../img/clients/client-4.png";
import logo5 from "../../img/clients/client-5.png";
import logo6 from "../../img/clients/client-6.png";
import logo7 from "../../img/clients/client-7.png";
import {Client} from "./client";
import {BlockTitle, GridRow} from "../components";
import {useMediaQuery} from "react-responsive";
import {clientsContext, clientsDataContext} from "../../state/state";

export const Clients = () => {
    const clientsData = useContext(clientsDataContext)
    const title = clientsData.title;
    const clients = clientsData.clients;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const [isActive, changeStatus] = useState(isMobile ? 2 : 5);

    const prevClient = () => {
        (isActive > (isMobile ? 2 : 5)) && changeStatus(isActive => isActive - 1)
    }
    const nextClient = () => {
        (isActive < clients.length) && changeStatus(isActive => isActive + 1)
    }

    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <GridRow sc={"clients"} tc={"owl-carousel"} gridTemplateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)"}>
            {clients.length > (isMobile ? 2 : 5) && <div className="owl-nav">
                <div className="owl-prev" onClick={prevClient}/>
                <div className="owl-next" onClick={nextClient}/>
            </div>}
            {clients.map((client, index) => {
                return (index >= (isMobile ? (isActive - 2) : (isActive - 5)) && index < isActive) && <Client img={client.logo}/>
            })}
        </GridRow>
    </div>
}