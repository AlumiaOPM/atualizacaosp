import React from 'react';
import Provider from '../Provider';

import { IconContext } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './index.module.css';

export default function WhatsappBtn() {
  const phone = false;

  if(phone){
    return (
      <a 
          className={styles.whatsappBtn}
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=55011972850590`}
        >
          <Provider>

            <IconContext.Provider
              value={{
                color: "#fff",
                size: 46
              }}
            >
              <FaWhatsapp />
            </IconContext.Provider>

          </Provider>
        </a>
    )
  }else {
    return <div></div>;
  }
};
