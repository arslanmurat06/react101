export const getData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error("Error getting ite ${key} from localstorage", error);
  }
};

export const storeData = (key, item) => {
  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error("Error storing item ${key} to localstorage", error);
  }
};
