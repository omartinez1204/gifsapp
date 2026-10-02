import { useRef, useState } from "react";
import type { Gif } from "../db/data";
import { getGifsFromGiphy } from "../api/get-gifs";


export const customHook = () => {
    const [gifSearches, setGifsSearched] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const cacheDeGifs = useRef<Record<string, Gif[]>>({});

    //!-----------------------------------------------------------------------
    const addNewGif = async (gif: string) => {
        const newGif = gif.trim().toLowerCase();
        if (gifSearches.includes(newGif)) return;
        try {
            const data: Gif[] = await getGifsFromGiphy(newGif);
            cacheDeGifs.current[gif] = data;
            setGifs(data);
        } catch (error) {
            console.log(error)
        }
        setGifsSearched([newGif, ...gifSearches].slice(0, 5));
    }
    //!-----------------------------------------------------------------------
    const handleClickButton = async (lblClicked: string) => {
        if (cacheDeGifs.current[lblClicked]) {
            setGifs(cacheDeGifs.current[lblClicked]);
        }
        return;
    }

    return {
        addNewGif,
        gifSearches,
        handleClickButton,
        gifs
    }

}