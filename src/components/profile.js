import React, {useContext} from "react";
import {profileContext} from "../state/state";

export const Profile = () => {
    const profile = useContext(profileContext);

    return <div className="header-content">
        <div className="header-photo">
            <img src={profile.img} alt="Alex Smith"/>
        </div>
        <div className="header-titles">
            <h2>{profile.fullName}</h2>
            {profile.specialty.map(s => {
                return s.status && <h4 key={s.title}>{s.title}</h4>
            })}
        </div>
    </div>
}