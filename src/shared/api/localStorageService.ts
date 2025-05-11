export const LocalStorageService = {
  getItemByKey: (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    return JSON.parse(item);
  },
  setItemByKey: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItemByKey: (key: string) => {
    localStorage.removeItem(key);
  },
  clearAllStorage: () => {
    localStorage.clear();
  },
};
