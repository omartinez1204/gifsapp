import axios from 'axios';
import type { GifsResponse } from '../interfaces/gifs-response';

export const getGifsFromGiphy = async (gif: string) => {
    const response = await axios.get<GifsResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key:import.meta.env.VITE_APIKEY,
            q: gif,
            limit: 8,
            lang: 'es'
        }
    })
    const gifs = response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))

    return gifs;
}