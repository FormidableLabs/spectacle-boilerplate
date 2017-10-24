import { dirCtxToObj } from "./helpers";

const trimRxp = RegExp("(\.\/|\.(gif|svg|jpg|jpeg|tiff|png)$)", "g");

/**
 * Remove the ./ and extension to the file names to make pretty keys
 * @param {Object} obj - Object resulting from context imports (ex. { "./fileName.ext": value })
 * @return {Object} - Object with trimmed keys (ex. { "fileName": value })
 */
const trimKeys = (obj) => Object.keys(obj)
  .map((k) => ({ [k.replace(trimRxp, "")]: obj[k] }))
  .reduce((o, i) => Object.assign(o, i), {});

// have to use the /r/x form of RegExp here to make webpack happy
const ctx = require.context("../assets", true, /\.(gif|svg|jpg|jpeg|tiff|png)$/);

/**
 * Returns an object containing the imported images with trimmed key names
 * @return {Object} - Images object
 */
export const getImages = () => trimKeys(dirCtxToObj(ctx));
