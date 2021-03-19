import React from 'react';
import Provider from '../Provider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  InputGroup,
  InputRightElement,
  Input
} from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';
import { VscChevronRight } from 'react-icons/vsc';

import './index.css';

export default function SearchHome() {

  const handleInputChange = ({target}) => {
    const cards = document.querySelectorAll('.card');

    //SE A BUSCA NÃO ESTIVER VAZIA
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
      //CASO A BUSCA ESTIVER VAZIA
    } else {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('hidden');
      }
    }
  }

  return (
    <div className="searchHome">
      <div className="breadcrumb">
        <Provider>

          <Breadcrumb separator={<VscChevronRight color="gray" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ESPM</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Atualizações</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

        </Provider>
      </div>

      <div className="search">
        <Provider>

          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<FaSearch color="gray" />}
            />
            <Input
              type="text"
              placeholder="O que você quer aprender?"
              variant="filled"
              focusBorderColor="gray.200"
              onChange={handleInputChange}
            />
          </InputGroup>

        </Provider>
      </div>

    </div>
  )
}
