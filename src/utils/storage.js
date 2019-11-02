import AsyncStorage from '@react-native-community/async-storage';

const Storage = {};

Storage.save = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

Storage.getByKey = key => {
  return AsyncStorage.getItem(key);
};

Storage.getAll = () => {
  return AsyncStorage.getAllKeys();
};

Storage.clear = () => {
  return AsyncStorage.clear();
};

Storage.removeByKey = key => {
  return AsyncStorage.removeItem(key);
};

export default Storage;
