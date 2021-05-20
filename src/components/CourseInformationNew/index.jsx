import React from 'react';
import Provider from '../Provider';
import Disc from '../../assets/Disc2';

import { Button } from '@chakra-ui/react';

import icon from '../../assets/information.svg';

import './index.css';

export default function CourseInformationNew({ 
  hero, 
  cartLink, 
  inicioPt2, 
  sectionId, 
  handleModalOpen 
}) {
  return (
    <div className="courseInformationNew">
      <Provider>
        <div className="courseInformation-flexSection">

          <div className="item">
            <img src={hero} />
          </div>
          <div className="item">
            {["Aulas 100% on-line",
              "Atualização",
              `Aulas: ${inicioPt2}`].map(text => (
                <div className="listItem">
                  <div className="listIcon"><img src={icon} /></div>
                  <div><p>{text}</p></div>
                </div>
              ))}

            <div className="listItem">
              <div className="listIcon"><img src={icon} /></div>
              <div>
                <p>Formas de pagamento</p>
                <small>
                  *À vista no boleto ou em até 10x sem juros no cartão de crédito.
              </small>
              </div>
            </div>

            <Button
              colorScheme="black"
              width="100%"
              height="54px"
              variant="solid"
              margin="10px auto"
              onClick={handleModalOpen}
              _hover={{
                filter: "brightness(130%)"
              }}
            >
              SAIBA MAIS
            </Button>
          </div>

        </div>
      </Provider>

      <Disc style={{marginTop: "-2%"}} fill="#fff"/>
    </div>
  )
}
