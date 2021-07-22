import React from 'react';
import Provider from '../Provider';

import logo from '../../assets/logo-new.png';

import './styles.css';

export default function Footer({ courseName }) {
  return (
    <div className="home-footer">
      <Provider>
        <div className="row">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menus">
            <div className="item">
              <ul>
                <li><p>NOSSOS CURSOS</p></li>
                <li><a href="/#comunicacao-e-marketing">Comunicação e Marketing</a></li>
                <li><a href="/#gestao-de-pessoas">Gestão de Pessoas</a></li>
                <li><a href="/#negocios">Negócios</a></li>
                <li><a href="/#marketing-digital">Marketing Digital</a></li>
                <li><a href="/#vendas-e-engajamento">Vendas & Engajamento</a></li>
                <li><a href="/#desenvolvimento-pessoal">Desenvolvimento Pessoal</a></li>
              </ul>
            </div>

            {courseName && 
            <div className="item">
              <ul>
                <li><p>{courseName}</p></li>
                <li><a href="#sobre-a-formacao">Sobre a formação</a></li>
                <li><a href="#programa">O Programa</a></li>
                <li><a href="#quando-acontece">Quando acontece</a></li>
                <li><a href="#investimento">Investimento</a></li>
              </ul>
            </div>}
          </div>
        </div>

      </Provider>
    </div>
  )
}
