import React from 'react';
import Provider from '../Provider';
import { IconContext } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './index.module.css';
/* import { getCourseDataAndThumbnails } from '../../services/api';
import {useState, useEffect} from 'react'; */



export default function WhatsappBtn() {
 
  const phone = 5511974370650;
  const slug = window.location.pathname;
  if (phone) {
    return (
      <a
        className={styles.whatsappBtn}
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${phone}`}
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
  } else {
    return (
      <div></div>
    )
  }
};

