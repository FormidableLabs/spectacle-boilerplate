import createSpectacleTheme from "spectacle/lib/themes/default";
import merge from 'deepmerge';

const createTheme = (colors, fonts, overrides = {}) => {
  let t = createSpectacleTheme(colors, fonts);
  t.screen = merge(t.screen, overrides);
  return t;
};

export default createTheme;