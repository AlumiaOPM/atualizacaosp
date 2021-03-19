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
              <a href="#">Comercial</a>
              <a href="#">Recursos Humanos</a>
              <a href="#">Marketing</a>
              <a href="#">Metodologias Ágeis</a>
              <a href="#">Ciência de Dados</a>
              <a href="#">Desenvolvimento Pessoal</a>
              <a href="#">Moda e Varejo</a>
              <a href="#">Empreendedorismo</a>
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
