import axios from 'axios';
import type { GifsResponse } from '../interfaces/gifs-response';

export const getGifsFromGiphy = async(gif : string)=>{
    
    const response = await axios.get<GifsResponse>('https://api.giphy.com/v1/gifs/search',{
        params:{
            api_key: 'ubrfrOWotEUQ0TEzgE4Ud5mpWKhnnXZX',
            q:gif,
            limit:10,
            lang:'es'
        }
    })

   //? Darle formato a los gifs
}