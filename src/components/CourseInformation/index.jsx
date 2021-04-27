import React from 'react';

import { Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { IconContext } from 'react-icons/';
import { AiOutlineCalendar } from 'react-icons/ai';
import Provider from '../Provider';

import './index.css';

export default function CourseInformation({ hero, cartLink, inicioPt2, sectionId }) {
  const iconStyle = {
    size: 50,
    color: "#B0B0B0"
  };

  return (
    <Provider>
      <div className="flexSection" id={sectionId}>
        <div className="flexItem">
          <img src={hero} alt="Hero" />
        </div>

        <div className="flexItem">
          <ul>
            <li>
              <img src="https://uol.espm.edu.br/wp-content/uploads/2020/06/icon-location-grey-1.svg" />
              <p>São Paulo - Joaquim Távoa</p>
            </li>
            <li>
              <img src="https://ppsp.espm.edu.br/wp-content/plugins/nd-learning/templates/icon-typology-grey.svg" />
              <p>Aulas on-line</p>
            </li>
            <li>
              <img src="https://uol.espm.edu.br/wp-content/uploads/2020/06/icon-difficulty-grey.svg" />
              <p>Atualização</p>
            </li>
            <li>
              <IconContext.Provider value={iconStyle}>
                <AiOutlineCalendar />
              </IconContext.Provider>
              <p>Aulas: ao vivo por webconferência <br/> <small>{inicioPt2}</small></p>
            </li>
            <li>
              <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://atualizacaosp.espm.br/wp-content/uploads/2021/04/price.png" />
              <div>
                <p>Formas de Pagamento</p> <small>*À vista no boleto ou em até 10x sem juros no cartão de crédito.</small>
              </div>
            </li>
          </ul>
          <Link isExternal href={cartLink}>
            <Button
              colorScheme="green"
              width="100%"
              height="54px"
              variant="solid"
            >
              QUERO ME INSCREVER
              <ExternalLinkIcon marginLeft="2" />
            </Button>
          </Link>
        </div>
      </div>

    </Provider>
  );
};
