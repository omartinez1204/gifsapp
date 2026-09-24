import { useState } from 'react';
import { CustomHeader } from './components/CustomHeader';
import { GifsList } from './components/GifsList';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchPanel } from './components/SearchPanel';
import {gifsList} from './db/data';

export const GifsApp = () => {
  const [gifSearches, setGifsSearched] = useState(['naruto', 'bilma']);
  
  const addNewGif = (gif: string)=>{ 
    const newGif = gif.trim().toLowerCase();
    if( gifSearches.includes(newGif)) return;
    setGifsSearched([ newGif, ...gifSearches].slice(0,5));
  }

  return (
    <>
      <CustomHeader titulo='App de gifs chidos' subtitulo='Busca algo'/>
      <SearchPanel onAddNewGif={addNewGif}/>
      <PreviousSearches searches={gifSearches} />
      <GifsList gifsList={gifsList} />
    </>
  )
}
