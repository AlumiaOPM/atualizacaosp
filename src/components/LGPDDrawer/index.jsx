import React from 'react';
import Provider from '../Provider';

import { Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import './index.css';

export default function LGPDDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const lgpdDrawer = React.useRef();
  const consentPropertyName = 'jdc_consent';
  
  const storageType = {
    getItem: (item) => {
      const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`
    }
  };

  React.useEffect(() => {
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    console.log(document.cookie)
    if (shouldShowPopup)
      setIsDrawerVisible(shouldShowPopup);

  }, []);

  const handleClick = event => {
    storageType.setItem(consentPropertyName, true);
    setIsDrawerVisible(false);
  }

  return (
    <div
      ref={lgpdDrawer}
      className="lgpdDrawer"
      style={{ transform: `translateY(${isDrawerVisible ? '0%' : '150%'})` }}
    >
      <Provider>
        <div className="flexSection">

          <div className="flexItem">
            <p>
              Usamos cookies para armazenar informações sobre como você usa o nosso site e as páginas que visita. Tudo para tornar sua experiência a mais agradável possível. Para entender os tipos de cookies que utilizamos, acesse nossa <Link href="/politica-de-cookies" isExternal color="green">política de cookies<ExternalLinkIcon mx="2px" /></Link>. Ao clicar em Eu concordo, você consente com a utilização de cookies.
            </p>
          </div>

          <div className="flexItem">
            <Button 
              colorScheme="green"
              onClick={handleClick}
            >
              Eu concordo
            </Button>
          </div>

        </div>
      </Provider>
    </div>
  )
}
