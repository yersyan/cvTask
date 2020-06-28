import React, {useEffect, useState} from "react";
import {GridRow} from "./components";

export const Home = ({animClass}) => {

    const [anim, setAnim] = useState("")

    useEffect(() => {
        return () => {
            setAnim("animated-section-rotateSlideOut")
        }
    }, [anim])


  return <section data-id="home" className={`animated-section start-page ${animClass} ${anim}`}>

      <div className="section-content vcentered">

          <GridRow>

                  <div className="title-block">
                      <h2>Alex Smith</h2>
                      <div className="owl-carousel text-rotation">
                          <div className="item">
                              <div className="sp-subtitle">Web Designer</div>
                          </div>

                          <div className="item">
                              <div className="sp-subtitle">Frontend-developer</div>
                          </div>
                      </div>
                  </div>

          </GridRow>

      </div>
  </section>
}
