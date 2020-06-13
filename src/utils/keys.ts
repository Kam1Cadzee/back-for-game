import config from '../config';

export const generateKey = (name: 'abbyy' | 'azure') => {
  let currentIndex = -1;
  const countKeys = config[`${name}_keys_count`]();
  let iterable = 0;
  return {
    current: () => {
      if(currentIndex === -1) {
        currentIndex = 0;
      }
      return config[`${name}_keys`][currentIndex];
    },
    next: (success: boolean = true) => {
      if(!success) {
        iterable += 1;
      }
      if(iterable > countKeys) {
        return null;
      }
      currentIndex += 1;
      if(currentIndex === countKeys) {
        currentIndex = 0;
      }
      return config[`${name}_keys`][currentIndex];
    },
    clear: () => {
      iterable = 0;
    }
  }
};
