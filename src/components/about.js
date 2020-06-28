import React from "react";
import {BlockTitle, GridRow, PageTitle, WhiteSpace} from "./components";
import {Clients} from "./clients/clients";
import {Testimonials} from "./testimonials/testimonials";
import {FunFacts} from "./funFacts/funFacts";

export const About = ({animClass}) => {
    return <section data-id="about-me" className={`animated-section ${animClass}`}>
        <PageTitle title={"About"} span={"Me"}/>

        <div className="section-content">

            <GridRow gridTemplateColumns={"57% 38%"} gridColumnGap={"5%"}>
                <div className="col-xs-12 col-sm-7">
                    <p>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
                        elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
                        justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
                        hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
                        condimentum dictum et vel massa. Ut in imperdiet dolor, vel
                        consectetur dui.</p>
                </div>

                <div className="col-xs-12 col-sm-5">
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="title">Age</span>
                                <span className="value">32</span>
                            </li>

                            <li>
                                <span className="title">Residence</span>
                                <span className="value">USA</span>
                            </li>

                            <li>
                                <span className="title">Address</span>
                                <span className="value">88 Some Street, Some Town</span>
                            </li>

                            <li>
                                <span className="title">e-mail</span>
                                <span className="value">email@example.com</span>
                            </li>

                            <li>
                                <span className="title">Phone</span>
                                <span className="value">+0123 123 456 789</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </GridRow>


            <WhiteSpace size={"50px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"What"} span={"I Do"}/>
                </div>
            </GridRow>

            <GridRow gridTemplateColumns={"repeat(2, 1fr)"}>
                <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="lnr lnr-store"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>Ecommerce</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.</p>
                                </div>
                            </div>
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="lnr lnr-laptop-phone"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>Web Design</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="lnr lnr-pencil"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>Copywriting</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.</p>
                                </div>
                            </div>
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="lnr lnr-flag"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>Management</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GridRow>


            <WhiteSpace size={"30px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"Testimonials"}/>
                </div>
            </GridRow>

            <Testimonials/>


            <WhiteSpace size={"50px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"Clients"}/>
                </div>
            </GridRow>

            <Clients/>

            <WhiteSpace size={"50px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"Pricing"}/>
                </div>
            </GridRow>

            <GridRow gridTemplateColumns={"100%"}>
                <div className=" col-xs-12 col-sm-12 ">
                    <div className="fw-pricing clearfix row">
                        <GridRow gridTemplateColumns={"repeat(2, 1fr)"} gridColumnGap={"5%"}>
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
                                    <div className="fw-default-row"></div>
                                </div>
                            </div>
                        </GridRow>
                    </div>
                </div>
            </GridRow>


            <WhiteSpace size={"50px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"Fun"} span={"Facts"}/>
                </div>
            </GridRow>

            <FunFacts/>
        </div>

    </section>
}