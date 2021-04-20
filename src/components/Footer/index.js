import Provider from '../Provider';

import logo from '../../assets/logo.png';

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

            <div className="item">
              <ul>
                <li><p>{courseName}</p></li>
                <li><a href="#">Sobre a formação</a></li>
                <li><a href="#">O Programa</a></li>
                <li><a href="#">Quando acontece</a></li>
                <li><a href="#">Investimento</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pos-footer">
          <hr></hr>
          <div className="item">
            <p>© Copyright 2021</p>
            <p>ESPM - O inusitado em constante movimento</p>
          </div>
        </div>
      </Provider>
    </div>
  )
}
