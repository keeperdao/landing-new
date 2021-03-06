import { createTheme } from "@material-ui/core/styles";
import { css, keyframes } from "@emotion/react";

const COLORS = {
  text_primary: "#F5F5F5",
  text_secondary: "#8F8F8F",
  text_accent: "#6C46D6",
  text_primary_light: "#141118",
  text_secondary_light: "#8F8F8F",
  text_accent_light: "#09A7F3",
  background_dark: "#141118",
  background_light: "#f5f5f5",
  hover_dark: "#6C46D6",
  hover_light: "#09A7F3",
  selected: "#562CC9",
  focus: "#552BC8",
  disabled: "#D5D5D5",
  active: "#09AF73",
};

const animGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary_dark: COLORS.text_primary,
      primary_light: COLORS.text_primary_light,
      secondary: COLORS.text_secondary,
    },
    background: {
      dark: COLORS.background_dark,
      light: COLORS.background_light,
    },
    action: {
      hover: COLORS.hover,
      selected: COLORS.selected,
      focus: COLORS.focus,
      disabled: COLORS.disabled,
      active: COLORS.active,
    },
    accent: COLORS.hover_dark,
    accent_light: COLORS.hover_light,
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    headingDisplay: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "48px",
      lineHeight: "58px",
    },
    headingTitle: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "32px",
      lineHeight: "39px",
    },
    subtitleRegular: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "24px",
    },
    subtitleBold: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
    },
    paragraphRegularLarge: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
    },
    paragraphRegularMedium: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "17px",
    },
    paragraphRegularTiny: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
    },
    paragraphBoldLarge: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
    },
    paragraphBoldLabel: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
      textTransform: "capitalize",
    },
    bodyNormal: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
    },
    bodyNormal2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    bodyItalic: {
      fontFamily: "Inter",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
    },
    bodyBold: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "27px",
    },
    h1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "56px",
      letterSpacing: "-0.015em",
      textAlign: "left",
    },
    h6: {
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "135%",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
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
      variants: [
        {
          props: { variant: "outlined-dark" },
          style: {
            color: COLORS.text_primary,
            background: "none",
            border: "1px solid",
            borderColor: COLORS.text_primary,
            transition: "0.22s",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            letterSpacing: "0em",
            textTransform: "none",
            "&:hover": {
              borderColor: COLORS.hover_dark,
              color: COLORS.hover_dark,
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
        },
        {
          props: { variant: "outlined-light" },
          style: {
            color: COLORS.text_primary_light,
            background: "none",
            border: "1px solid",
            borderColor: COLORS.text_primary_light,
            transition: "0.22s",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            letterSpacing: "0em",
            textTransform: "none",
            "&:hover": {
              borderColor: COLORS.hover_light,
              color: COLORS.hover_light,
            },
            "&:active": {
              backgroundColor: COLORS.hover_light,
              borderColor: COLORS.hover_light,
              color: COLORS.text_primary,
            },
            "&:disabled": {
              borderColor: "#525252",
              color: "#525252",
            },
          },
        },
        {
          props: { variant: "outlined-blue" },
          style: {
            color: COLORS.hover_light,
            background: "none",
            border: "1px solid",
            borderColor: COLORS.hover_light,
            transition: "0.22s",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            letterSpacing: "0em",
            textTransform: "none",
            "&:hover": {
              borderColor: COLORS.hover_light,
              color: COLORS.hover_light,
            },
            "&:active": {
              backgroundColor: COLORS.hover_light,
              borderColor: COLORS.hover_light,
              color: COLORS.text_primary,
            },
            "&:disabled": {
              borderColor: "#525252",
              color: "#525252",
            },
          },
        },
        {
          props: { variant: "text-dark" },
          style: {
            color: COLORS.text_primary_dark,
            textTransform: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            marginRight: "12px",
            "&:hover": {
              background: "none",
              color: COLORS.hover_dark,
            },
            "&:active": {
              color: COLORS.hover_dark,
            },
          },
        },
        {
          props: { variant: "text-light" },
          style: {
            color: COLORS.text_primary_light,
            textTransform: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            marginRight: "12px",
            "&:hover": {
              background: "none",
              color: COLORS.hover_light,
            },
            "&:active": {
              color: COLORS.hover_light,
            },
          },
        },
        {
          props: { variant: "text-footer" },
          style: {
            textTransform: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            padding: 0,
            justifyContent: "flex-start",
            marginRight: "12px",
            "&:hover": {
              background: "none",
              color: COLORS.hover_dark,
            },
            "&:active": {
              color: COLORS.hover_dark,
            },
          },
        },
      ],
      styleOverrides: {
        "contained-dark": {
          color: COLORS.text_primary,
          backgroundImage:
            "linear-gradient(to right, #6C46D6, #09A7F3, #6C46D6)",
          backgroundSize: "400% 400%",
          animation: `${animGradient} 18000ms ease infinite`,
          border: "1px solid",
          borderColor: COLORS.text_primary_light,
          transition: "0.22s",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "0em",
          textTransform: "none",
          "&:hover": {
            animation: `${animGradient} 2000ms ease infinite`,
          },
          "&:active": {
            backgroundColor: COLORS.selected,
            color: COLORS.text_primary,
            transform: "scale(0.98)",
          },
          "&:disabled": {
            background: "#525252",
          },
        },
        "contained-light": {
          color: COLORS.text_primary,
          backgroundImage:
            "linear-gradient(to right, #6C46D6, #09A7F3, #6C46D6)",
          backgroundSize: "400% 400%",
          animation: `${animGradient} 18000ms ease infinite`,
          border: "1px solid",
          transition: "0.22s",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "0em",
          textTransform: "none",
          "&:hover": {
            animation: `${animGradient} 2000ms ease infinite`,
            color: COLORS.text_primary_dark,
          },
          "&:active": {
            backgroundColor: COLORS.hover_light,
            borderColor: COLORS.hover_light,
            color: COLORS.text_primary,
          },
          "&:disabled": {
            background: "#525252",
          },
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "dark" },
          style: {
            transition: "0.22s",
            background: "none",
            color: COLORS.text_primary,
            "&:hover": {
              background: "none",
              color: COLORS.hover_dark,
            },
            "&:active": {
              background: "none",
              color: COLORS.hover_dark,
            },
          },
        },
        {
          props: { variant: "light" },
          style: {
            transition: "0.22s",
            background: "none",
            color: COLORS.text_primary_light,
            "&:hover": {
              background: "none",
              color: COLORS.hover_light,
            },
            "&:active": {
              background: "none",
              color: COLORS.hover_light,
            },
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      header: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  shadows: ["none"],
});

export default theme;
