import React from "react";

export const Testimonial = ({img, author, company}) => {
    return <div className="testimonial">
        <div className="img">
            <img src={img} alt="Alex Smith"/>
        </div>
        <div className="text">
            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla
                condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula
                pellentesque, at vehicula dui ultrices.</p>
        </div>

        <div className="author-info">
            <h4 className="author">{author}</h4>
            <h5 className="company">{company}</h5>
            <div className="icon">
                <i className="fas fa-quote-right"></i>
            </div>
        </div>
    </div>
}