import React from 'react';
import Slider from '../componets/Slider';
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Generatelorem from '../componets/GenerateLorem';
const inform = [
    {
        id: 1, title: "How to learn web design", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore libero vel reprehenderit. Aut, ea."
    },

    {
        id: 1, title: "What is API in programming Lanuage", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore libero vel reprehenderit. Aut, ea."
    }
]
const Home = ({ children }) => {
    return (
        <section className="hero">

            <div className="hero-info">
                <h1>Welcome to my website, Here you can learn website and developement</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nam. Exercitationem quibusdam dignissimos et blanditiis!</p>
                <button className="signin-btn">Sign in</button>
            </div>

            <div className="hero-card">
                <h1>Welcome to hero card !</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, repudiandae hic tempore, necessitatibus quasi tempora, modi dicta animi natus nobis nesciunt nostrum tenetur reiciendis similique.</p>
                <button>Learn more</button>
            </div>

        </section>
    );
}



export default Home;
