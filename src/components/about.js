import React, {useContext} from "react";
import {BlockTitle, GridRow, PageTitle, WhiteSpace} from "./components";
import {Clients} from "./clients/clients";
import {Testimonials} from "./testimonials/testimonials";
import {FunFacts} from "./funFacts/funFacts";
import {useMediaQuery} from "react-responsive";
import {InfoList} from "./infoList";
import {InfoListWIcon} from "./infoListWIcon/infoListWIcon";
import "../css/perfect-scrollbar.css"

export const About = ({animClass}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return <section data-id="about-me" className={`animated-section ${animClass}`}>
        <PageTitle title={"About"} span={"Me"}/>

        <div className="section-content">
            <InfoList/>
            <WhiteSpace size={"50px"}/>
            <InfoListWIcon/>
            <WhiteSpace size={"30px"}/>
            <Testimonials/>
            <WhiteSpace size={"50px"}/>
            <Clients/>
            <WhiteSpace size={"50px"}/>
            <BlockTitle title={"Pricing"}/>
            <GridRow gridTemplateColumns={"100%"}>
                <div className=" col-xs-12 col-sm-12 ">
                    <div className="fw-pricing clearfix row">
                        <GridRow gridTemplateColumns={isMobile ? "100%" : "repeat(2, 1fr)"} gridColumnGap={"5%"}>
                            <div className="fw-package-wrap col-md-6 ">
                                <div className="fw-package">
                                    <div className="fw-heading-row">
                                        <span>Silver</span>
                                    </div>

                                    <div className="fw-pricing-row">
                                        <span>$64</span>
                                        <small>per month</small>
                                    </div>

                                    <div className="fw-button-row">
                                        <a href="#" target="_self"
                                           className="btn btn-secondary">Free Trial</a>
                                    </div>

                                    <div className="fw-default-row">Lorem ipsum dolor</div>
                                    <div className="fw-default-row">Pellentesque scelerisque
                                    </div>
                                    <div className="fw-default-row">Morbi eu sagittis</div>
                                </div>
                            </div>

                            <div className="fw-package-wrap col-md-6 highlight-col">
                                <div className="fw-package">
                                    <div className="fw-heading-row">
                                        <span>Gold</span>
                                    </div>

                                    <div className="fw-pricing-row">
                                        <span>$128</span>
                                        <small>per month</small>
                                    </div>

                                    <div className="fw-button-row">
                                        <a href="#" target="_self" className="btn btn-primary">Free
                                            Trial</a>
                                    </div>

                                    <div className="fw-default-row">Lorem ipsum dolor</div>
                                    <div className="fw-default-row">Pellentesque scelerisque
                                    </div>
                                    <div className="fw-default-row">Morbi eu sagittis</div>
                                    <div className="fw-default-row">Donec non diam</div>
                                    <div className="fw-default-row"/>
                                </div>
                            </div>
                        </GridRow>
                    </div>
                </div>
            </GridRow>
            <WhiteSpace size={"50px"}/>
            <FunFacts/>
        </div>


    </section>
}