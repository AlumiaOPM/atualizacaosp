import Provider from '../Provider';

import logo from '../../assets/logo.png';

import './index.css';

export default function HomeFooter() {
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
                <li><a href="#">Comercial</a></li>
                <li><a href="#">Recursos Humanos</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Metodologias Ágeis</a></li>
                <li><a href="#">Ciência de Dados</a></li>
                <li><a href="#">Desenvolvimento Pessoal</a></li>
                <li><a href="#">Moda e Varejo</a></li>
                <li><a href="#">Empreendedorismo</a></li>
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
