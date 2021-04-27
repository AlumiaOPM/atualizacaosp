import React from 'react';
import Provider from '../Provider';

import {
  Button,
  Skeleton,
  Link
} from '@chakra-ui/react';

import { IconContext } from 'react-icons';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import './index.css';

export default function HeaderHome({
  loading,
  courseTitle,
  inicio,
  cargaHoraria,
  handleModalOpen,
  isAlumeca,
  cartLink
}) {

  return (
    <div className="header-course">

      <Provider>
        <div className="row">
          <div className="course-head">
            <div className="logo">
              <img src={"../img/logo.jpg"} alt="logo" />
            </div>
            <nav className="nav">
              <a href="#sobre-a-formacao">Sobre a formação</a>
              <a href="#programa">O Programa</a>
              <a href="#quando-acontece">Quando acontece</a>
              <a href="#investimento">Investimento</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="title">
            <h1>{courseTitle}</h1>
            {loading && <Skeleton height="40px" margin="80px 0px 20px 0px" isLoaded={!loading} />}

            <div className="inicio">
              <p>
                {!loading && <IconContext.Provider value={{ size: "40", color: "#f1f1f1" }}><FaRegCalendarAlt /></IconContext.Provider>}
                {inicio}
                {loading && <Skeleton height="50px" width="100%" />}
              </p>
              <p>
                {!loading && <IconContext.Provider value={{ size: "40", color: "#f1f1f1" }}><FaRegClock /></IconContext.Provider>}
                {cargaHoraria}
                {loading && <Skeleton height="50px" width="100%" />}
              </p>
            </div>

            <div className="cta">
              {!loading && isAlumeca &&
                <Link isExternal href={cartLink}>
                  <Button
                    colorScheme="green"
                    width="100%"
                    height="54px"
                    variant="solid"
                  >
                    INSCREVER-SE
                      <ExternalLinkIcon marginLeft="2" />
                  </Button>
                </Link>}
              {!loading && !isAlumeca &&
                <Button
                  colorScheme="green"
                  size="lg"
                  width="100%"
                  height="54px"
                  onClick={handleModalOpen}
                >SAIBA MAIS</Button>}
            </div>
          </div>
        </div>
      </Provider>

    </div>
  )
}
