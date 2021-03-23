import React from 'react';
import Card from '../../components/Card';
import CardSkeleton from '../../components/Card/CardSkeleton';
import Provider from '../../components/Provider';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel
} from '@chakra-ui/react';

import './index.css';

export default function HomeCollection({ data, title, isLoading, openPopup }) {
  return (
    <div className="homeCollection">
      <Provider>

        <Accordion
          defaultIndex={[0]}
          allowMultiple
        >

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <div className="collectionTitle">{title}</div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={0} style={{padding: '0px 10px 0px 0px'}}>
              <div className="collection">
                {!isLoading && [1, 2, 3, 4, 5, 6].map(item => <CardSkeleton />)}
                {data && data.map((item, index) => {
                  return (
                    <Card
                      image={item[7]}
                      startDate={item[1]}
                      course={item[9]}
                      landingPageLink={item[11]}
                      key={index}
                      expired={item[8] === "TRUE"}
                      openPopup={openPopup}
                    />
                  )
                })}
              </div>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>

      </Provider>
    </div>
  )
}
