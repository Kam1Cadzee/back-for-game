import axios from 'axios';
import config from '../config';
import {IMinicard, IWordList} from '../typing/ABBYYTypes';
import {generateKey} from '../utils/keys';

const instance = axios.create({
  baseURL: config.abbyy_url
});

const utilKey = generateKey('abbyy');

instance.interceptors.response.use(value => {
  if(!value.request.path.endsWith('authenticate')) {
    utilKey.clear();
  }
  return value;
}, async error => {
  if(error.response.status === 401) {
    const res = await serviceABBYY.auth(utilKey.current());
    if(res) {
      return instance(error.config);
    }
  }
  else if(error.response.status === 429) {
    const key = utilKey.next(false);
    if(key === null) {
      throw error;
    }
    const res = await serviceABBYY.auth(key);
    if(res) {
      return instance(error.config);
    }
  }
  else if(error.response.status === 404) {
    error.response.status = null;
    throw error;
  }
  throw error;
});

const serviceABBYY = {
  auth: async (apiKey: string = utilKey.current()) => {
    try {
      const res = await instance.post('authenticate', {}, {
        headers: {
          'Authorization': `Basic ${apiKey}`
        }
      });

      if(res.status === 200) {
        instance.defaults.headers = {
          'Authorization': `Bearer ${res.data}`
        };
      }
      return res.status === 200;
    }
    catch (e) {
      return e.response.status;
    }
  },
  miniCard: async (text: string) => {
    try {
      const res = await instance.get<IMinicard>('Minicard', {
        params: {
          text,
          srcLang: 1033,
          dstLang: 1049,
        }
      });
      if(res.status === 200) {
        return res.data.Translation.Translation;
      }
      return null;
    }
    catch (e) {
      if(e.response === undefined) {
        console.log(e);
      }
      return e.response.status;
    }
  },
  wordList: async (prefix: string) => {
    try {
      const res = await instance.get<IWordList>('WordList', {
        params: {
          prefix,
          srcLang: 1033,
          dstLang: 1049,
          pageSize: 30,
        }
      });
      if(res.status === 200) {
        return res.data;
      }
      return null;
    }
    catch (e) {
      if(e.response === undefined) {
        console.log(e);
      }
      return e.response.status;
    }
  }
};

export default serviceABBYY;
