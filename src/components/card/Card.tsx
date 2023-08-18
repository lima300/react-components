import Atropos from "atropos/react";
import "atropos/css";
import "./styles.css";

import atroposBg from "./assets/atropos-bg.svg";
import atroposMountains from "./assets/atropos-mountains.svg";
import atroposForestBack from "./assets/atropos-forest-back.svg";
import atroposForestMid from "./assets/atropos-forest-mid.svg";
import atroposForestFront from "./assets/atropos-forest-front.svg";

import avatar from "./assets/avatar.jpeg";

import instagram from "./assets/instagram.svg";
import linkedIn from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";

export const Card = () => {
  return (
    <div className="card-container">
      <Atropos className="atropos-header">
        <div className="atropos-inner">
          <img
            className="atropos-header-spacer image"
            src={atroposBg}
            alt="stars"
          />
          <img
            className="image"
            data-atropos-offset="-4.5"
            src={atroposBg}
            alt="stars"
          />
          <img
            className="image"
            data-atropos-offset="-2.5"
            src={atroposMountains}
            alt="mountains"
          />
          <img
            className="image"
            data-atropos-offset="0"
            src={atroposForestBack}
            alt="forest"
          />
          <img
            className="image"
            data-atropos-offset="2"
            src={atroposForestMid}
            alt="forest"
          />
          <img
            className="image"
            data-atropos-offset="4"
            src={atroposForestFront}
            alt="forest"
          />
          <div className="card-avatar">
            <img src={avatar} />
          </div>

          <div className="card-body">
            <span className="card-body-title">Otávio Lima</span>
            <span className="card-body-sub-title">
              DESENVOLVEDOR FULL-STACK
            </span>
            <div className="card-body-text">
              <span>
                Engenheiro de Software Full-Stack com 5 anos de experiência em
                React e Node.js. Especialista em criar aplicações web de alto
                desempenho e sofisticação, focado em entregar soluções
                inovadoras e experiências de usuário excepcionais.
              </span>
            </div>
            <div className="card-footer-buttons">
              <a href="/oi">
                <img src={linkedIn} />
              </a>
              <a href="/oi">
                <img src={instagram} />
              </a>
              <a href="/oi">
                <img src={facebook} />
              </a>
            </div>
          </div>
        </div>
      </Atropos>
    </div>
  );
};
