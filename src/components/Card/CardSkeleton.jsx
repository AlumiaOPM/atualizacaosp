import React from 'react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

import './index.css';

export default function CardSkeleton() {
  return (
    <div className='skeleton'>
      <Skeleton height="216px" margin="0px 0px 10px 0px"/>
      <SkeletonText spacing="4" noOfLines={4} margin="10px 0px"/>
      <Skeleton height="50px" margin="20px 0px 0px 0px"/>
    </div>
  )
}
