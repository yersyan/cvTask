import React, {useState} from "react";
import "./blogCards.css";
import img1 from "../../img/blog/blog_post_1.jpg";
import img2 from "../../img/blog/blog_post_2.jpg";
import img3 from "../../img/blog/blog_post_3.jpg";
import img4 from "../../img/blog/blog_post_4.jpg";
import {BlogCard} from "./blogCard";
import {NavLink} from "react-router-dom";

export const BlogCards = () => {
    const [blogCards] = useState([
        {description: "Design", img: img1, date: "05 Mar 2020", title: "Why I Switched to Sketch For UI Design", address: "/blog/blog-post-1.html"},
        {description: "UI", img: img2, date: "23 Feb 2020", title: "Best Practices for Animated Progress Indicators", address: "/blog/blog-post-1.html"},
        {description: "Design", img: img3, date: "06 Feb 2020", title: "Designing the Perfect Feature Comparison Table", address: "/blog/blog-post-1.html"},
        {description: "Design", img: img4, date: "07 Jan 2020", title: "An Overview of E-Commerce Platforms", address: "/blog/blog-post-1.html"},
    ])

    return <div className="blog-masonry two-columns clearfix">
        {blogCards.map(b => {
            return <NavLink to={b.address}>
                <BlogCard description={b.description} img={b.img} date={b.date} title={b.title}/>
            </NavLink>

        })}
    </div>
}