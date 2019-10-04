export const arrayToHashMap = (key, a) =>
  a && a.length > 0
    ? a.reduce((map, obj) => {
        map[obj[key]] = obj;
        return map;
      }, {})
    : [];