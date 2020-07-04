import React, {useEffect} from "react";
import cn from "classnames";
import bgImage from "../img/main_bg.png";

export const Bg = () => {
    const backgroundImage = `url(${bgImage})`;

    // useEffect(() => {
    //
    //     const parallax = (event) => {
    //         const lay = document.getElementById('lay')
    //         const speed = lay.getAttribute('speed-parallax')
    //         lay.style.transform = `translateX(${
    //             (event.clientX * Number(speed)) / 1000}px) translateY(${
    //             (event.clientY * Number(speed)) / 1000}px)`
    //     }
    //
    //     document.addEventListener('mousemove', parallax);
    //
    //     return () => {
    //         document.removeEventListener('mousemove', parallax)
    //     }
    //
    // }, [])



    return <div id='lay' className={cn("lm-animated-bg")} style={{backgroundImage}} data-parallax="50"/>
}