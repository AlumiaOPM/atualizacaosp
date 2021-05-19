import React from 'react';
import Provider from '../Provider';
import Disc from '../../assets/Disc';

import { Button } from '@chakra-ui/react';

import icon from '../../assets/information.svg';

import './index.css';

export default function CourseInformationNew({ hero, cartLink, inicioPt2, sectionId }) {
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
                  <div><img src={icon} /></div>
                  <div><p>{text}</p></div>
                </div>
              ))}

            <div className="listItem">
              <div><img src={icon} /></div>
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
              _hover={{
                filter: "brightness(130%)"
              }}
            >
              INSCREVER-SE
            </Button>
          </div>

        </div>
      </Provider>

      <Disc fill="#fff" style={{marginTop: "-2%"}}/>
    </div>
  )
}
