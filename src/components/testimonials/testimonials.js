import React, {useState} from "react";
import {Testimonial} from "./testimonial";
import testimonial1 from "../../img/testimonials/testimonial-1.jpg"
import testimonial2 from "../../img/testimonials/testimonial-2.jpg"
import testimonial3 from "../../img/testimonials/testimonial-3.jpg"
import {GridRow} from "../components";

export const Testimonials = () => {
    const [authors] = useState([
        {img: testimonial1, name: "Julia Hickman", company: "Omni Source"},
        {img: testimonial2, name: "Robert Watkins", company: "Endicott Shoes"},
        {img: testimonial3, name: "Kristin Carroll", company: "Helping Hand"},
    ])

    const [isActive, changeStatus] = useState(2);

    const prevClient = () => {
        (isActive > 2) && changeStatus(isActive => isActive - 1)
    }
    const nextClient = () => {
        (isActive < authors.length) && changeStatus(isActive => isActive + 1)
    }

    return <GridRow sc={"testimonials"} tc={"owl-carousel"} gridTemplateColumns={"repeat(2, 1fr)"} gridColumnGap={"5%"}>
        {authors.length > 2 && <div className="owl-nav">
            <div className="owl-prev" onClick={prevClient}/>
            <div className="owl-next" onClick={nextClient}/>
        </div>}
        {authors.map((author, index) => {
            return (index >= isActive - 2 && index < isActive) && <Testimonial img={author.img} author={author.name} company={author.company}/>
        })}
    </GridRow>
}