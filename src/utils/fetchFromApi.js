import axios from "axios";

const BASE_URL= 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};
  export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;

  }
  