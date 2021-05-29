import React from 'react';
import { Link } from '@chakra-ui/react';
import Provider from '../Provider';
import Disc from '../../assets/Disc2';

import { Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import informationIcon from '../../assets/information.svg';
import aulasIcon from '../../assets/aulas_icon.svg';
import atualizacaoIcon from '../../assets/atualizacao.svg';
import calendarIcon from '../../assets/calendar_icon.svg';

import './index.css';

export default function CourseInformationNew({
  hero,
  cartLink,
  inicioPt2,
  sectionId,
  handleModalOpen,
  isAlumeca,
  loading
}) {
  return (
    <div className="courseInformationNew" id={sectionId && sectionId}>
      <Provider>
        <div className="courseInformation-flexSection">

          <div className="item">
            <img src={hero} />
          </div>
          <div className="item">
            {[{
              text: "Aulas 100% on-line",
              icon: aulasIcon
            },
            {
              text: "Atualização",
              icon: atualizacaoIcon,
            },
            {
              text: `Aulas: ${inicioPt2}`,
              icon: calendarIcon,
            }].map(item => (
              <div className="listItem">
                <div className="listIcon"><img src={item.icon} /></div>
                <div><p>{item.text}</p></div>
              </div>
            ))}

            <div className="listItem">
              <div className="listIcon"><img src={informationIcon} /></div>
              <div>
                <p>Formas de pagamento</p>
                <small>
                  *À vista no boleto ou em até 10x sem juros no cartão de crédito.
              </small>
              </div>
            </div>

            <div className="courseInformation-cta">
              {/* Se for alumeca mostra INSCREVER-SE */}
              {!loading && isAlumeca &&
                <Link isExternal href={cartLink}>
                  <Button
                    colorScheme="black"
                    width="100%"
                    height="46px"
                    variant="solid"
                    margin="20px auto"
                    _hover={{
                      filter: "brightness(130%)"
                    }}
                  >
                    INSCREVER-SE
                    <ExternalLinkIcon marginLeft="2" />
                  </Button>
                </Link>}

              {/* Se não for alumeca mostra o SAIBA MAIS */}
              {!loading && !isAlumeca &&
                <Button
                  colorScheme="black"
                  width="100%"
                  height="46px"
                  variant="solid"
                  margin="20px auto"
                  onClick={handleModalOpen}
                  _hover={{
                    filter: "brightness(130%)"
                  }}
                >
                  SAIBA MAIS
              </Button>}
            </div>
          </div>

        </div>
      </Provider>

      <Disc style={{ marginTop: "-2%" }} fill="#fff" />
    </div>
  )
}
