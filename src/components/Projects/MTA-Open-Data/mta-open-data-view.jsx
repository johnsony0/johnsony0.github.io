import React, {useState} from 'react';
import { Home } from './MTAhome';
import { ArtMap } from './MTAArtMap';
import { ArtNearby } from './MTAArtNearby';
//import { ArtSimilar } from './MTAArtSimilar';
import { Art } from './MTAArt'
import { useFetchData } from './MTAutils';

function MTAOpenData(){ 
  const [page,setPage] = useState('Home')
  const pageOne = 'Explore Artworks'
  const pageTwo = 'Display Nearby Art'
  const pageThree = 'View Art Map'

  const [artData, setArtData] = useState([]);
  useFetchData(setArtData)

  return (
    <>
      {page === 'Home' ? (
        <Home setPage={setPage} pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree}/>
      ) : page === pageThree ? (
        <ArtMap artData={artData} setPage={setPage} nextPage={pageOne} prevPage={pageTwo}/>
      ) : page === pageTwo ? (
        <ArtNearby artData={artData} setPage={setPage} nextPage={pageThree} prevPage={pageOne}/>
      ) : page === pageOne ? (
        <Art artData={artData} setPage={setPage} nextPage={pageTwo} prevPage={pageThree}/>
      ) : null}
    </>
  );
}

export default MTAOpenData;