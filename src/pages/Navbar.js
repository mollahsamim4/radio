import React, { useState } from 'react';
import logo from "../images/logo.png"
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Radio from './Radio';
import Reservation from './Reservation';

import Contact from './Contact';
import Home from './Home';
import Page from './Page';
import Color from './Color';
import { useGlobal } from '../context';
import { useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa"
const Navbar = () => {
    const { links } = useGlobal()
    const [isShow, setIsShow] = useState(null)

    window.addEventListener("resize", e => {
        if (window.innerWidth > 756) {
            setIsShow(null)
        }
    })
    return (
        <>
            <header className={useLocation().pathname == "/" ? "home" : 'other'} >
                <div className=" logo">

                    <img src={logo} alt="logo.png" className="img-fluid" />

                </div>
                <div className="toggle">
                    <FaBars className="icon" onClick={() => setIsShow(!isShow)} />
                </div>
                <div className={isShow ? "navb navb-links" : "navb"}>
                    <ul>
                        {
                            links.map(link => {
                                const { id, name, path } = link
                                return <li key={id}>
                                    <Link to={path}>{name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </header>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/color" component={Color} />
                <Route path="/reservation" component={Reservation} />
                <Route path="/radio" component={Radio} />
                <Route path="/page" component={Page} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    );
}

export default Navbar;
