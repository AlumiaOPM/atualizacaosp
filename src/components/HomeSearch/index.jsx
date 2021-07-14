import React from 'react';
import Provider from '../Provider';
import {
  Box,
  InputGroup,
  InputRightElement,
  Input
} from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';

import './index.css';

export default function SearchHome() {

  const handleInputChange = ({ target }) => {
    const cards = document.querySelectorAll('.card');

    //If is not empty
    if (target.value.length > 0) {
      for (var i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('.text h4')
        const regex = new RegExp(target.value, "i")

        if (!regex.test(title.textContent)) {
          cards[i].classList.add('hidden');
        } else {
          cards[i].classList.remove('hidden')
        }
      }
      //If is empty
    } else {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('hidden');
      }
    }
  }

  return (
    <div className="searchHome">

      <div className="search">
        <Provider>

          <Box borderWidth="1px" borderRadius="lg" display="flex" p="6">
            <p>Buscar por cursos</p>

            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<FaSearch color="gray" />}
              />
              <Input
                type="text"
                placeholder="O que você quer aprender?"
                variant="outline"
                focusBorderColor="gray.900"
                onChange={handleInputChange}
              />
            </InputGroup>
          </Box>

        </Provider>
      </div>

    </div>
  )
}
