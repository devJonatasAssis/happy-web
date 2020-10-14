import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "../../assets/styles/global.css";
import "../../assets/styles/pages/landing.css";

import logo from "../../assets/images/Logo.svg";

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logo} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Nova Esperança</strong>
                    <span>Paraná</span>
                </div>

                <Link to="/orphanage" className="enter-app">
                    <FiArrowRight size={32} />
                </Link>
            </div>
        </div>
    );
};

export default Landing;
