import React, {useContext} from "react";
import {animationsContext} from "../state/state";


export const ArrowMenu = ({paginate, setAnimation}) => {
const animations = useContext(animationsContext)

    const forward = () => {
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random])
        paginate(1)
    }
    const back = () => {
        let random = parseInt(Math.floor(Math.random() * 67));
        setAnimation(animations[random])
        paginate(-1)
    }

    return (
        <>
            <div className="lmpixels-arrows-nav">
                <div className="lmpixels-arrow-right" onClick={forward}>
                    <i className="lnr lnr-chevron-right"/>
                </div>

                <div className="lmpixels-arrow-left" onClick={back}>
                    <i className="lnr lnr-chevron-left"/>
                </div>
            </div>
        </>
    );

}
