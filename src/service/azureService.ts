import axios from 'axios';
import config from '../config';
import {generateKey} from '../utils/keys';
import {IResponseDictionary, IResponseTranslate} from '../typing/AZURETypes';

const utilKey = generateKey('azure');

const instance = axios.create({
  baseURL: config.azure_url,
  headers: {
    'Ocp-Apim-Subscription-Key': utilKey.current(),
  }
});

instance.interceptors.response.use(value => {

  return value;
}, async error => {
  console.log({error});
  throw error;
});

const azureService = {
  translate: async (text: string) => {
    const data = [
      {"Text": text}
    ];

    try {
      const res = await instance.post<IResponseTranslate[]>('translate', data, {
        params: {
          'api-version': '3.0',
          to: 'ru',
          from: 'en'
        }
      });

      return res.data[0].translations[0].text;
    }
    catch (e) {
      console.log({e});
      return null;
    }
  },
  dictionary: async (text: string) => {
    const data = [
      {"Text": text}
    ];
    try {
      const res = await instance.post<IResponseDictionary[]>('dictionary/lookup', data, {
        params: {
          'api-version': '3.0',
          to: 'ru',
          from: 'en'
        }
      });

      return res.data[0];
    }
    catch (e) {
      console.log({e});
      return null;
    }
  }
};

export default azureService;
