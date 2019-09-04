import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cdf87.firebaseio.com/'
});

export default instance;