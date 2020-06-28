import React, {useState} from 'react';
import "./css/animations.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.css";
import "./css/perfect-scrollbar.css";
import "./css/reset.css";
import "./css/main.css";
import {BrowserRouter} from "react-router-dom";
import bgImage from "./img/main_bg.png";
import {Route, Switch} from "react-router";
import {Header} from "./components/header";
import {Home} from "./components/home";
import {About} from "./components/about";
import {Resume} from "./components/resume";
import {Portfolio} from "./components/portfolio";
import {Blog} from "./components/blog";
import {Contact} from "./components/contact";
import {ArrowNav} from "./components/menu";

const App = () => {

    const backgroundImage = `url(${bgImage})`;

    const [animation, setAnimation] = useState("")

    return (
        <BrowserRouter>
            <div className="lm-animated-bg" style={{backgroundImage}}/>
            {/*<div className="preloader">*/}
            {/*    <div className="preloader-animation">*/}
            {/*        <div className="preloader-spinner">*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="page">
                <div className="page-content">
                    <Header setAnimation={setAnimation}/>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ArrowNav/>
                    <div className="content-area">
                        <div className="animated-sections">
                            <Switch>
                                <Route path="/home" render={() => <Home animClass={animation}/>}/>
                                <Route path="/about" render={() => <About animClass={animation}/>}/>
                                <Route path="/resume" render={() => <Resume animClass={animation}/>}/>
                                <Route path="/portfolio" render={() => <Portfolio animClass={animation}/>}/>
                                <Route path="/blog" render={() => <Blog animClass={animation}/>}/>
                                <Route path="/contact" render={() => <Contact animClass={animation}/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
