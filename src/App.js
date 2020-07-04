import React, {useState} from 'react';
import "./css/animations.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.css";
import "./css/perfect-scrollbar.css";
import "./css/reset.css";
import "./css/main.css";
import {BrowserRouter} from "react-router-dom";
import {Route,} from "react-router";
import {Preloader} from "./components/preloader";
import {PortfolioOne} from "./components/portfolioPages/portfolio1";
import {Page} from "./components/page";
import {Bg} from "./components/bg";

const App = () => {

    const [preloader, changePreloader] = useState(true)

    setTimeout(() => changePreloader(false), 3000)

    return (
        <BrowserRouter>
            <Route path="/portfolio/portfolio-1" render={() => <PortfolioOne/>}/>
            <Bg/>
            {preloader ? <Preloader/> : <Page/>}
        </BrowserRouter>
    );
}

export default App;
