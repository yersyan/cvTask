import React from "react";
import "./blogCards.css";

export const BlogCard = ({description, img, date, title}) => {
    return <div className="item post-1">
        <div className="blog-card">
            <div className="media-block">
                <div className="category">
                    <a href="#" title="View all posts in Design">{description}</a>
                </div>
                <a href="blog-post-1.html">
                    <img src={img} className="size-blog-masonry-image-two-c"
                         alt="Why I Switched to Sketch For UI Design" title=""/>
                    <div className="mask"/>
                </a>
            </div>
            <div className="post-info">
                <div className="post-date">{date}</div>
                <a href="/#">
                    <h4 className="blog-item-title">{title}</h4>
                </a>
            </div>
        </div>
    </div>
}