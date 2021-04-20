import React from "react";

import "./styles/Home.css";
import PlatziConf from "../images/platziconf-logo.svg";
import Astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Home__col">
        <img src={PlatziConf} alt="Logo de PlatziConf" />
        <h1>PRINT YOUR BADGES</h1>
        <p>The easiest way to manage your conference</p>
        <div className="Badges__buttons-home">
          <Link to="/badges" className="btn btn-primary">
            Start now
          </Link>
        </div>
      </div>
      <img src={Astronauts} alt="" />
    </div>
  );
}

export default Home;
