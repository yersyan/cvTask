import React, {useContext, useEffect, useState} from "react";
import {Header} from "./header";
import {MenuToggle} from "./menuToggle";
import {ArrowNav} from "./menu";
import {Route, Switch, useHistory} from "react-router";
import {BlogPost} from "./blogPost";
import {Redirect, useLocation} from "react-router-dom";
import {Home} from "./home";
import {About} from "./about";
import {Resume} from "./resume";
import {Portfolio} from "./portfolio";
import {Blog} from "./blog";
import {Contact} from "./contact";
import {useMediaQuery} from "react-responsive";
import {Car} from "./carousel";
import {ArrowMenu} from "./arrowMenu";
import {wrap} from "@popmotion/popcorn";
import {menuContext} from "../state/state";
import {AnimatePresence} from "framer-motion";
import HomePage from "./home"


export const Page = () => {
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
    const [isOpen, open] = useState(false)

    const [animation, setAnimation] = useState("")

    const history = useHistory()
    const menu = useContext(menuContext)
    const menuPath = menu.map(m => {
        return m.path
    })

    const [[page, direction], setPage] = useState([0, 0]);
    const pathIndex = wrap(0, menuPath.length, page);
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    history.push(menuPath[pathIndex])

    useEffect(() => {
        console.log(page)
    })



    return <div className="page">
        <div className="page-content">
            {isDesktop && <Header setAnimation={setAnimation} setPage={setPage}/>}
            {isOpen && <Header setAnimation={setAnimation} open={open} setPage={setPage} />}
            <MenuToggle isOpen={isOpen} open={open}/>
            <ArrowMenu paginate={paginate} setAnimation={setAnimation}/>
            <Route path="/blog/blog-post-1.html" render={() => <BlogPost animClass={animation}/>}/>
            <div className="content-area">
                    <div className="animated-sections">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                            <Route path="/home" render={() => <Home animClass={animation}/>} />}/>
                            <Route path="/about" render={() => <About animClass={animation}/>}  />}/>
                            <Route path="/resume" render={() => <Resume animClass={animation}/>} />}/>
                            <Route exact path="/portfolio" render={() => <Portfolio animClass={animation}/>}  />}/>
                            <Route exact path="/blog" render={() => <Blog animClass={animation}/>} />}/>
                            <Route path="/contact" render={() => <Contact animClass={animation}/>}  />}/>
                        </Switch>
                    </div>
            </div>
        </div>
    </div>
}