import React from 'react';
import Provider from '../Provider';
import Disc from '../../assets/Disc2';

import logo from '../../assets/logo.jpg';

import './index.css';

export default function HeaderHome() {
  return (
    <div className="headerHome">

      <Provider>
        <div className="row">
          <div className="head">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <nav className="nav">
              <a href="#comunicacao-e-marketing">Comunicação e Marketing</a>
              <a href="#gestao-de-pessoas">Gestão de Pessoas</a>
              <a href="#negocios">Negócios</a>
              <a href="#marketing-digital">Marketing Digital</a>
              <a href="#vendas-e-engajamento">Vendas & Engajamento</a>
              <a href="#desenvolvimento-pessoal">Desenvolvimento Pessoal</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="title">
            <h1>Prepare-se para os novos <br></br> desafios do mercado</h1>
          </div>
        </div>
      </Provider>

      <Disc fill="#fff" />
    </div>
  )
}
