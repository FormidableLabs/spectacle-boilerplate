/**
 * Reads the contents of a directory context into an Object
 * @param {context} context - A webpack directory custom context Object
 * @return {Object} - Object with directory contents { [filename]: contents}
 */
export const dirCtxToObj = (context) => {
  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce((obj, key, idx) => {
    obj[key] = values[idx];
    return obj;
  }, {});
};
