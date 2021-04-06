import React from 'react';
import Provider from '../Provider';

import { IconContext } from 'react-icons';
import { Skeleton } from '@chakra-ui/skeleton';

import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

import './index.css';
import { Button } from '@chakra-ui/button';

export default function HeaderHome({ loading, courseTitle, inicio, cargaHoraria }) {
  return (
    <div className="headerHome">

      <Provider>
        <div className="row">
          <div className="head">
            <div className="logo">
              <img src={"../img/logo.jpg"} alt="logo" />
            </div>
            <nav className="nav">
              <a href="#">Sobre a formação</a>
              <a href="#">O Programa</a>
              <a href="#">Quando acontece</a>
              <a href="#">Investimento</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="title">
            <h1>{courseTitle}</h1>
            {loading && <Skeleton height="50px" margin="80px 0px 20px 0px" isLoaded={!loading} />}

            <div className="inicio">
              <p>
                {!loading && <IconContext.Provider value={{size: "40", color: "#f1f1f1"}}><FaRegCalendarAlt /></IconContext.Provider>}
                {inicio}
                {loading && <Skeleton height="60px" width="100%"/>}
              </p>
              <p>
                {!loading && <IconContext.Provider value={{size: "40", color: "#f1f1f1"}}><FaRegClock /></IconContext.Provider>}
                {cargaHoraria}
                {loading && <Skeleton height="60px" width="100%"/>}
              </p>
            </div>

            <div className="cta">
              <Button colorScheme="green" size="lg" width="260px" height="54px">Saiba mais</Button>
            </div>
          </div>
        </div>
      </Provider>

    </div>
  )
}
