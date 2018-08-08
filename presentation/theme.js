import createTheme from "../createTheme";

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#fc300f",
  quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  }, {
    components: {
      heading: {
        h1: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;