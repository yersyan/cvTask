import React from "react";
import cn from "classnames"

export const MenuToggle = ({isOpen, open}) => {
    return <div className={cn("menu-toggle", isOpen && "open")} onClick={isOpen ? () => open(false) : () => open(true)}>
        <span/>
        <span/>
        <span/>
    </div>
}