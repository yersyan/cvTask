import React, {useState} from "react";
import logo1 from "../../img/clients/client-1.png";
import logo2 from "../../img/clients/client-2.png";
import logo3 from "../../img/clients/client-3.png";
import logo4 from "../../img/clients/client-4.png";
import logo5 from "../../img/clients/client-5.png";
import logo6 from "../../img/clients/client-6.png";
import logo7 from "../../img/clients/client-7.png";
import {Client} from "./client";
import {GridRow} from "../components";

export const Clients = () => {
    const [clients] = useState([
        {logo: logo1, },
        {logo: logo2, },
        {logo: logo3, },
        {logo: logo4, },
        {logo: logo5, },
        {logo: logo6, },
        {logo: logo7, },
    ])

    const [isActive, changeStatus] = useState(5);

    const prevClient = () => {
        (isActive > 5) && changeStatus(isActive => isActive - 1)
    }
    const nextClient = () => {
        (isActive < clients.length) && changeStatus(isActive => isActive + 1)
    }

    return <GridRow sc={"clients"} tc={"owl-carousel"} gridTemplateColumns={"repeat(5, 1fr)"}>
        {clients.length > 5 && <div className="owl-nav">
            <div className="owl-prev" onClick={prevClient}/>
            <div className="owl-next" onClick={nextClient}/>
        </div>}
        {clients.map((client, index) => {
            return (index >= isActive - 5 && index < isActive) && <Client img={client.logo}/>
        })}
    </GridRow>
}