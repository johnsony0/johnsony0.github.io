import React, {useState} from 'react';
import { IntroSequence } from './MTAintro';
import { ArtMap } from './MTAArtMap';
import { ArtNearby } from './MTAArtNearby';
import { ArtSimilar } from './MTAArtSimilar';

function MTAOpenData(){ 
  const [page,setPage] = useState('Intro')

  return (
    <>
      {page === 'Intro' ? (
        <IntroSequence setPage={setPage} />
      ) : page === 'View Art Map' ? (
        <ArtMap setPage={setPage} />
      ) : page === 'Explore Art Nearby' ? (
        <ArtNearby setPage={setPage} />
      ) : page === 'Display Similar Art' ? (
        <ArtSimilar setPage={setPage} />
      ) : null}
    </>
  );
}

export default MTAOpenData;