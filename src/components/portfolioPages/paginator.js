import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {pages} from "./page-data"



export const Paginator = () => {
    const [page, setPage] = useState(0)

console.log(page)
    return  <div className="ajax-page-nav">
        <div className="nav-item ajax-page-prev-next">
            <NavLink className="ajax-page-load" to={pages[0]}><i className="lnr lnr-chevron-left"/></NavLink>
            <NavLink className="ajax-page-load" to={pages[1]}><i className="lnr lnr-chevron-right"/></NavLink>
            <NavLink to="/portfolio" className="ajax-page-load"><i className="lnr lnr-cross"/></NavLink>
        </div>
    </div>
}