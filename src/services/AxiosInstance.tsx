import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.2.4:3333/', // @todo transformar esse valor num .env
});