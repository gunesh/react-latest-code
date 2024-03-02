import axios from 'axios';

const axiosInstance  = axios.create({
  baseURL: 'https://reqres.in/'
});

export { axiosInstance  };
