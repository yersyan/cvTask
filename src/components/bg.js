import React, {useEffect} from "react";
import cn from "classnames";
import bgImage from "../img/main_bg.png";

export const Bg = () => {
    const backgroundImage = `url(${bgImage})`;

    useEffect(() => {

        const parallax = (event) => {
            const lay = document.getElementById('lay')
            let moveX = (event.pageX * -1/50)
            let moveY = (event.pageY * -1/50)
            lay.style.backgroundPosition = `${moveX}px ${moveY}px`
        }

        document.addEventListener('mousemove', parallax);

        return () => {
            document.removeEventListener('mousemove', parallax)
        }

    }, [])


    return <div id='lay' className={cn("lm-animated-bg")} style={{backgroundImage}}/>
}