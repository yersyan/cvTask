import React from "react";
import {BlockTitle, GridRow, PageTitle} from "./components";
import {useMediaQuery} from "react-responsive";

export const Contact = ({animClass}) => {
    const isSmMobile = useMediaQuery({ query: '(max-width: 575px)' })

    return <section data-id="contact" className={`animated-section ${animClass}`}>
        <PageTitle title={"Contact"}/>

        <div className="section-content">

            <GridRow gridTemplateColumns={isSmMobile ? "100%" : "1fr 2fr"} gridColumnGap={"5%"}>

                <div className="col-xs-12 col-sm-4">
                    <div className="lm-info-block gray-default">
                        <i className="lnr lnr-map-marker"></i>
                        <h4>San Francisco</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                    </div>

                    <div className="lm-info-block gray-default">
                        <i className="lnr lnr-phone-handset"></i>
                        <h4>415-832-2000</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                    </div>

                    <div className="lm-info-block gray-default">
                        <i className="lnr lnr-envelope"></i>
                        <h4><a href="https://lmpixels.com/cdn-cgi/l/email-protection"
                               className="__cf_email__"
                               data-cfemail="51303d3429113429303c213d347f323e3c">[email&#160;protected]</a>
                        </h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                    </div>

                    <div className="lm-info-block gray-default">
                        <i className="lnr lnr-checkmark-circle"></i>
                        <h4>Freelance Available</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                    </div>


                </div>

                <div className="col-xs-12 col-sm-8">
                    <div id="map" className="map"></div>
                    <BlockTitle title={"How Can I"} span={"Help You?"}/>

                    <form id="contact_form" className="contact-form"
                          action="https://lmpixels.com/demo/breezycv/dark/1/contact_form/contact_form.php"
                          method="post">

                        <div className="messages"></div>

                        <div className="controls two-columns">
                            <div className="fields clearfix">
                                <div className="left-column">
                                    <div className="form-group form-group-with-icon">
                                        <input id="form_name" type="text" name="name"
                                               className="form-control" placeholder=""
                                               required="required"
                                               data-error="Name is required."/>
                                        <label>Full Name</label>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group form-group-with-icon">
                                        <input id="form_email" type="email" name="email"
                                               className="form-control" placeholder=""
                                               required="required"
                                               data-error="Valid email is required."/>
                                        <label>Email Address</label>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group form-group-with-icon">
                                        <input id="form_subject" type="text" name="subject"
                                               className="form-control" placeholder=""
                                               required="required"
                                               data-error="Subject is required."/>
                                        <label>Subject</label>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="form-group form-group-with-icon">
                                                                    <textarea id="form_message" name="message"
                                                                              className="form-control" placeholder=""
                                                                              rows="7" required="required"
                                                                              data-error="Please, leave me a message."></textarea>
                                        <label>Message</label>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="g-recaptcha"
                                 data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                                 data-theme="dark"></div>

                            <input type="submit" className="button btn-send"
                                   value="Send message"/>
                        </div>
                    </form>
                </div>

            </GridRow>

        </div>
    </section>
}