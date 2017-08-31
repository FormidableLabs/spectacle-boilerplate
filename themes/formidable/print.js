/*eslint-disable object-shorthand*/

const colors = {
  primary: "black",
  secondary: "black",
  tertiary: "black",
  quartenary: "black"
};

const brandFonts = {
  heading: "'Poppins', 'Century Gothic', 'Helvetica Neue', Helvetica, sans-serif",
  body: "'Source Serif Pro', serif",
  monospace: "'akkurta', 'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace"
};

const fonts = {
  primary: brandFonts.heading,
  secondary: brandFonts.body,
  tertiary: brandFonts.monospace
};

export default {
  colors: colors,
  fonts: fonts,
  global: {
    body: {
      background: "white",
      fontFamily: fonts.secondary,
      fontWeight: "normal",
      fontSize: "2em",
      color: "black",
      overflow: "hidden"
    },
    ".hljs": {
      background: "white",
      color: "black"
    },
    ".hljs span": {
      color: "black !important"
    }
  },
  fullscreen: {
    fill: colors.tertiary
  },
  controls: {
    prev: {
      position: "absolute",
      top: "50%",
      left: 20,
      transform: "translateY(-50%)",
      zIndex: 9999,
      background: "none",
      border: "none",
      outline: 0
    },
    prevIcon: {
      fill: colors.quartenary
    },
    next: {
      position: "absolute",
      top: "50%",
      right: 20,
      transform: "translateY(-50%)",
      zIndex: 9999,
      background: "none",
      border: "none",
      outline: 0
    },
    nextIcon: {
      fill: colors.quartenary
    }
  },
  progress: {
    pacman: {
      container: {
        position: "absolute",
        bottom: "5px",
        left: "50%",
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      pacman: {
        position: "absolute",
        transition: "left 0.3s ease-in-out 0.2s",
        width: "20px",
        height: "20px",
        transform: "translate(-5px, -5px)"
      },
      pacmanTop: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        background: colors.tertiary
      },
      pacmanBottom: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        background: colors.tertiary,
        top: "10px"
      },
      point: {
        position: "absolute",
        float: "left",
        background: "transparent",
        width: "10px",
        height: "10px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.tertiary,
        borderRadius: "50%",
        transition: "all 0.01s ease-out 0.4s"
      }
    },
    bar: {
      container: {
        position: "absolute",
        height: "10px",
        width: "100%",
        bottom: 0,
        left: 0,
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      bar: {
        height: "100%",
        background: colors.tertiary,
        transition: "all 0.3s ease-out"
      }
    },
    number: {
      container: {
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.tertiary
      }
    }
  },
  components: {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block"
    },
    quote: {
      borderLeft: `1px solid ${colors.primary}`,
      paddingLeft: 40,
      display: "block",
      color: "black",
      fontSize: "4.9rem",
      lineHeight: 1,
      fontWeight: "bold"
    },
    cite: {
      color: "black",
      display: "block",
      clear: "left",
      fontSize: "2rem",
      marginTop: "1rem"
    },
    content: {
      margin: "auto",
      textAlign: "center"
    },
    codePane: {
      pre: {
        maxWidth: 800,
        margin: "auto",
        fontSize: "0.8rem",
        fontWeight: "normal",
        fontFamily: fonts.tertiary
      },
      code: {
        textAlign: "left",
        padding: 20,
        fontFamily: fonts.tertiary,
        fontWeight: "normal"
      }
    },
    code: {
      color: "black",
      fontSize: "2.66rem",
      fontFamily: fonts.tertiary,
      margin: "0.25rem auto",
      backgroundColor: "rgba(0,0,0,0.15)",
      padding: "0 10px",
      borderRadius: 3
    },
    heading: {
      h1: {
        color: "black",
        fontSize: "7.05rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1,
        margin: 0
      },
      h2: {
        color: "black",
        fontSize: "5.88rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1.2,
        margin: 0
      },
      h3: {
        color: "black",
        fontSize: "4.9rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1.3,
        margin: "0.5rem auto"
      },
      h4: {
        color: "black",
        fontSize: "3.82rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1.3,
        margin: "0.5rem auto"
      },
      h5: {
        color: "black",
        fontSize: "3.19rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1.3,
        margin: "0.5rem auto"
      },
      h6: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.primary,
        fontWeight: "bold",
        lineHeight: 1.3,
        margin: "0.5rem auto"
      }
    },
    image: {
      display: "block",
      margin: "0.5rem auto"
    },
    link: {
      textDecoration: "none"
    },
    listItem: {
      fontSize: "2.66rem"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    tableHeaderItem: {
      fontSize: "2.66rem",
      fontWeight: "bold"
    },
    tableItem: {
      fontSize: "2.66rem"
    },
    table: {
      width: "100%"
    },
    text: {
      color: "black",
      fontSize: "2.66rem",
      fontFamily: fonts.secondary,
      lineHeight: 1.3,
      margin: "0.25rem auto"
    }
  }
};
