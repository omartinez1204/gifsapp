
import axios from 'axios';

export const getGiphys = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs', 
  params:{
    api_key:import.meta.env.VITE_APIKEY,
    limit: 10,
    lang: 'es'
  }
});