import React, {useState} from "react";
import {Header} from "./header";
import {MenuToggle} from "./menuToggle";
import {ArrowNav} from "./menu";
import {Route, Switch} from "react-router";
import {BlogPost} from "./blogPost";
import {Redirect} from "react-router-dom";
import {Home} from "./home";
import {About} from "./about";
import {Resume} from "./resume";
import {Portfolio} from "./portfolio";
import {Blog} from "./blog";
import {Contact} from "./contact";
import {useMediaQuery} from "react-responsive";

export const Page =  () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
    const [isOpen, open] = useState(false)

    const [animation, setAnimation] = useState("")

    const [page, setPage] = useState(1)


    return <div className="page">
        <div className="page-content">
            {isDesktop && <Header setAnimation={setAnimation} page={page} setPage={setPage}/>}
            {isOpen && <Header setAnimation={setAnimation} open={open} page={page} setPage={setPage}/>}
            <MenuToggle isOpen={isOpen} open={open}/>
            <ArrowNav setAnimation={setAnimation} page={page} setPage={setPage}/>
            <Route path="/blog/blog-post-1.html" render={() => <BlogPost animClass={animation}/>}/>
            <div className="content-area">
                <div className="animated-sections">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                        <Route path="/home" render={() => <Home animClass={animation}/>}/>
                        <Route path="/about" render={() => <About animClass={animation}/>}/>
                        <Route path="/resume" render={() => <Resume animClass={animation}/>}/>
                        <Route exact path="/portfolio" render={() => <Portfolio animClass={animation}/>}/>
                        <Route exact path="/blog" render={() => <Blog animClass={animation}/>}/>
                        <Route path="/contact" render={() => <Contact animClass={animation}/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    </div>
}