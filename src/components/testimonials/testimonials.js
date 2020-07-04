import React, {useContext, useState} from "react";
import {Testimonial} from "./testimonial";
import {BlockTitle, GridRow} from "../components";
import {useMediaQuery} from "react-responsive";
import {testimonialsContext, testimonialsDataContext} from "../../state/state";

export const Testimonials = () => {

    const testimonialsData = useContext(testimonialsDataContext)
    const authors = testimonialsData.testimonials;
    const title = testimonialsData.title;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


    const [isActive, changeStatus] = useState(isMobile ? 1 : 2);

    const prevClient = () => {
        (isActive > (isMobile ? 1 : 2)) && changeStatus(isActive => isActive - 1)
    }
    const nextClient = () => {
        (isActive < authors.length) && changeStatus(isActive => isActive + 1)
    }

    return <div>
        <BlockTitle title={title.mainTitle} span={title.spanTitle}/>
        <GridRow sc={"testimonials"} tc={"owl-carousel"} gridTemplateColumns={isMobile ? "100%" : "repeat(2, 1fr)"} gridColumnGap={"5%"}>
            {authors.length > (isMobile ? 1 : 2) && <div className="owl-nav">
                <div className="owl-prev" onClick={prevClient}/>
                <div className="owl-next" onClick={nextClient}/>
            </div>}
            {authors.map((author, index) => {
                return (index >= (isMobile ? (isActive - 1) : (isActive - 2)) && index < isActive) && <Testimonial img={author.img} author={author.name} company={author.company}/>
            })}
        </GridRow>
    </div>
}