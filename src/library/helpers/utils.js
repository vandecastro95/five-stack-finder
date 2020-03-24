

/**
 * Hash data structure to array.
 * Analogous to es2017 Object.values
 *
 * @param {Object} object
 * @return {Array}
 */
export const objectValues = object => {
  return Object.keys(object).reduce(
    (array, key) => array.push(object[key]) && array,
    []
  );
};

export const getKeys = (key, a) =>
  a && a.length > 0 ? a.map(x => x[key]) : [];

export const arrayToHashMap = (key, a) =>
  a && a.length > 0
    ? a.reduce((map, obj) => {
        map[obj[key]] = obj;
        return map;
      }, {})
    : [];

export const makeObjectIndex = (key, a) =>
  a && a.length > 0
    ? a.reduce((map, obj, index) => {
        map[obj[key]] = index;
        return map;
      }, {})
    : [];

export const deleteNullProps = obj => {
  var propNames = Object.getOwnPropertyNames(obj);
  for (var i = 0; i < propNames.length; i++) {
    var propName = propNames[i];
    if (
      typeof obj[propName] == 'undefined' &&
      (obj[propName] === null || obj[propName] === undefined)
    ) {
      delete obj[propName];
    }
  }
};

export const titleCase = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
};

/**
 * Creates an object based on the code list schema, both the short name and
 * long name will be the same.
 *
 * @param {*} value the value that is mapped to both the short name and long name
 * @return object
 */
export const toCodeObject = value => {
  return { shortname: value, longname: value };
};

/**
 * Converts as csv list into object array that represents a code list. Each item
 * of the code lists array has the keys short and long name. The csv value will
 * be mapped to both.
 *
 * @param {*} string represents a csv list (values separated by commas)
 * @return array
 */
export const csvToCodeObjectList = string => {
  return string ? string.split(',').map(term => toCodeObject(term.trim())) : [];
};

export const codeObjectListToCsv = array => {
  return array && array.length > 0
    ? array.map(obj => obj.shortname).join(', ')
    : '';
};
