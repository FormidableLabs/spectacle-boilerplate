import { dirCtxToObj } from "./helpers";
const ctx = require.context("./slides", true, /\.js$/);

export const allSlides = dirCtxToObj(ctx);

/**
 * Import components in the ./slides folder into an array in alphabetical order
 * @return {Array} - Slide[]
 */
export const getSlides = () => Object.keys(allSlides)
  .map((oKey, aKey) => allSlides[oKey].slide(aKey));
