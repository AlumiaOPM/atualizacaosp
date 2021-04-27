import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import Provider from '../../components/Provider';

import './index.css';

export default function QuandoAcontece({ iniciopt1, iniciopt2, sectionId }) {
  return (
    <div className="quando-acontece" id={sectionId}>
      <Provider>

        <div className="quando-acontece-flexSection">
          <div className="quando-acontece-flexItem">
            <IconContext.Provider
              value={{
                color: "#FFF",
                size: "80px",
                className: "calendar"
              }}
            >
              <FaRegCalendarAlt />
            </IconContext.Provider>
          </div>
          <div className="quando-acontece-flexItem">
            <h3>Quando acontece?</h3>
            <p>{iniciopt1}</p>
            <p>{iniciopt2}</p>
          </div>
        </div>

      </Provider>
    </div>
  )
}
