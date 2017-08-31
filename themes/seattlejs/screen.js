/*eslint-disable object-shorthand*/

const brand = {
  // grayscale
  darkGray: "#373534",
  white: "#f1f1f2",
  // seattlejs style guide 
  navy: "#00002c",
  blue: "#002f89",
  teal: "#008f7b",
  green: "#23955e",
  yellow: "#7fc241"
};

const colors = {
  primary: brand.navy,
  secondary: brand.blue,
  tertiary: brand.green,
  quartenary: brand.teal,
  white: brand.white
};

const fonts = {
  heading: "'BioRhyme', serif",
  body: "'Work Sans', sans-serif",
  monospace:
    "'Silkscreen', 'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace"
};

// Default Spectacle Theme for Screens
import screen from "spectacle/lib/themes/default/screen.js";
const defaultTheme = screen(colors, fonts);

// We're doing it. Let's deep merge the default theme from spectacle 
// with our custom theme overrides, without losing any default styles. 
// Source: https://davidwalsh.name/javascript-deep-merge
const isObjectWithValue = (val) => {
  return val && typeof val === 'object';
}

const deepmerge = (target, source) => {
  return mergeObject(target, source);
}

const mergeObject = (target, source) => {
  let dest = {}; 

  if (isObjectWithValue(target)) {
    Object.keys(target).forEach(key => {
      dest[key] = target[key];
    });
  }
  
  Object.keys(source).forEach(key => {
    if (!isObjectWithValue(source[key]) || !target[key]) {
      // Source is not an object OR target key does not exist 
      dest[key] = source[key];
    } else {
      // Source is an object and needs to be inspected further
      dest[key] = deepmerge(target[key], source[key]);
    } 
  });
  
  return dest;
}

// Custom Theme
const customTheme = {
  colors: colors,
  fonts: fonts,
  global: {
    body: {
      background: null,
      backgroundImage:
        "linear-gradient(to bottom, #1a58cc, #00bfa2, #28cc7d, #87e231)",
      fontFamily: fonts.body,
      color: colors.primary
    }
  },
  controls: {
    prevIcon: {
      fill: colors.primary
    },
    nextIcon: {
      fill: colors.primary
    }
  },
  progress: {
    number: {
      container: {
        position: "absolute",
        top: 20,
        right: 30,
        color: colors.primary,
        fontFamily: fonts.monospace,
        letterSpacing: "-0.275em",
        fontSize: "1em"
      }
    }
  },
  components: {
    quote: {
      borderLeft: `1px solid ${colors.primary}`
    },
    codePane: {
      pre: {
        height: "100%",
      },
      code: {
        color: brand.darkGray,
        fontFamily: fonts.monospace
      }
    },
    code: {
      fontFamily: fonts.monospace
    },
    heading: {
      h1: {
        fontFamily: fonts.heading,
        fontWeight: 300
      },
      h2: {
        fontFamily: fonts.heading,
        fontWeight: 300,
        lineHeight: 1.2
      },
      h3: {
        fontFamily: fonts.heading,
        fontWeight: 300,
        lineHeight: 1.2,
        margin: "0.25rem auto"
      },
      h4: {
        fontFamily: fonts.heading,
        fontWeight: 300,
        lineHeight: 1.2,
        margin: "0.25rem auto"
      },
      h5: {
        fontFamily: fonts.heading,
        fontWeight: 300,
        lineHeight: 1.3,
        margin: "0.25rem auto"
      },
      h6: {
        fontFamily: fonts.heading,
        fontWeight: 300,
        lineHeight: 1.3,
        margin: "0.25rem auto 1.5em"
      }
    },
    image: {
      margin: null,
      marginTop: "0.5rem",
      marginRight: "auto", 
      marginBottom: "0.5rem",
      marginLeft: "auto"
    },
    text: {
      color: colors.primary,
      fontSize: "2rem",
      fontFamily: fonts.body,
      margin: null,
      marginTop: "1.25rem",
      marginRight: "auto", 
      marginBottom: "1.25rem",
      marginLeft: "auto"
    }
  }
};

export default mergeObject(defaultTheme, customTheme);
