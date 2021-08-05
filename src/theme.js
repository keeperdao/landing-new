import { createTheme } from "@material-ui/core/styles";

const COLORS = {
  text_primary: "#F5F5F5",
  text_secondary: "#8F8F8F",
  background: "#141118",
  hover: "#6C46D6",
  selected: "#562CC9",
  focus: "#552BC8",
  disabled: "#D5D5D5",
  active: "#09AF73",
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: COLORS.text_primary,
      secondary: COLORS.text_secondary,
    },
    background: { default: COLORS.background },
    action: {
      hover: COLORS.hover,
      selected: COLORS.selected,
      focus: COLORS.focus,
      disabled: COLORS.disabled,
      active: COLORS.active,
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "56px",
      letterSpacing: "-0.015em",
    },
    h6: {
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: COLORS.text_primary,
          background: "none",
          border: "1px solid",
          borderColor: COLORS.text_primary,
          transition: "0.25s",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "0em",
          textTransform: "none",
          "&:hover": {
            borderColor: COLORS.hover,
            color: COLORS.hover,
          },
          "&:active": {
            backgroundColor: COLORS.selected,
            borderColor: COLORS.selected,
            color: COLORS.text_primary,
          },
          "&:disabled": {
            borderColor: "#525252",
            color: "#525252",
          },
        },
        contained: {
          color: COLORS.text_primary,
          backgroundImage:
            "linear-gradient(to right, #6C46D6 0%, #09A7F3 50%, #6C46D6 100%)",
          backgroundSize: "200%",
          transition: "0.25s",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "0em",
          textTransform: "none",
          "&:hover": {
            backgroundPosition: "right center",
          },
          "&:active": {
            backgroundImage:
              "linear-gradient(to right, #552BC8 0%, #0993DC 50%, #552BC8 100%)",
          },
          "&:disabled": {
            background: "#525252",
          },
        },
        text: {
          color: COLORS.text_primary,
          textTransform: "none",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          "&:hover": {
            background: "none",
            color: COLORS.hover,
          },
          "&:active": {
            color: COLORS.hover,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "0.25s",
          background: "none",
          color: COLORS.text_primary,
          "&:hover": {
            background: "none",
            color: COLORS.hover,
          },
          "&:active": {
            background: "none",
            color: COLORS.hover,
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
