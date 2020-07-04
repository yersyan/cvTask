import React, {useContext} from "react";
import {GridRow} from "./components";
import {profileContext} from "../state/state";
import cn from "classnames"


export const Home = ({animClass}) => {
    const profile = useContext(profileContext)

    return <section data-id="home" className={cn(`animated-section start-page ${animClass}`)}>
        <div className="section-content vcentered">
            <GridRow>
                <div className="title-block">
                    <h2>{profile.fullName}</h2>
                    <div className="owl-carousel text-rotation itemsBlock">
                        {profile.specialty.map((s, index) => {
                            return <div className={cn("item", `item${index + 1}`)} key={s.title}>
                                <div className="sp-subtitle">{s.title}</div>
                            </div>
                        })}
                    </div>
                </div>
            </GridRow>
        </div>
    </section>
}
