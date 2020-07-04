import React, {useContext} from "react";
import {socialLinksContext} from "../state/state";
import cn from "classnames"

export const SocialLinks = () => {
    const socialLinks = useContext(socialLinksContext);

    return <div className="social-links">
        <ul>
            {socialLinks.map(s => {
                return <li key={s.icon}>
                    <a href={s.source} target={s.target}><i className={cn("fab", s.icon)}/></a>
                </li>
            })}
        </ul>
    </div>
}