import type { GifsResponse } from '../interfaces/gifs-response';
import { getGiphys } from './axios-api'

export const getGifsFromGiphy = async (gif: string) => {
    const response = await getGiphys.get<GifsResponse>('/search', {
        params: {
            q: gif,
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

