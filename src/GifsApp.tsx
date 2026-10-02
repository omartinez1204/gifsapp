import { CustomHeader } from './components/CustomHeader';
import { GifsList } from './components/GifsList';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchPanel } from './components/SearchPanel';
import { customHook } from './hooks/customHook'

export const GifsApp = () => {
  
  const { addNewGif, gifSearches, handleClickButton, gifs } = customHook();
  
  return (
    <>
      <CustomHeader titulo='App de gifs chidos' subtitulo='Busca algo' />
      <SearchPanel onAddNewGif={addNewGif} />
      <PreviousSearches searches={gifSearches} onClicklbl={handleClickButton} />
      <GifsList gifsList={gifs} />
    </>
  )
}