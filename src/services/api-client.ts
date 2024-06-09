import axios from 'axios';

export default axios.create({
    baseURL :'https://api.rawg.io/api',
    params:{
        key :'9574b632b0ac41c18a849e6d0c88b8dd'
    } 
})