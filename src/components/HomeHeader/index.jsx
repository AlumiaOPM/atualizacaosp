import React from 'react';
import Provider from '../Provider';

import './index.css';

export default function HeaderHome() {
  return (
    <div className="headerHome">

      <Provider>
        <div className="row">
          <div className="head">
            <div className="logo">
              <img src="../img/logo.jpg" alt="logo" />
            </div>
            <nav className="nav">
              <a href="#marketing">Marketing</a>
              <a href="#recursos-humanos">Recursos Humanos</a>
              <a href="#ciencia-de-dados">Ciência de Dados</a>
              <a href="#moda-e-varejo">Moda e Varejo</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="title">
            <h1>Prepare-se para os novos <br></br> desafios do mercado</h1>
            <p>Cursos de Atualização</p>
          </div>
        </div>
      </Provider>
        
    </div>
  )
}
