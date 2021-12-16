import { createTheme } from "@material-ui/core/styles";
import { css, keyframes } from "@emotion/react";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { selectClasses } from "@mui/material/Select";

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

  dashboard_primary_light: "#F5F5F532",
  dashboard_primary_dark: "#F5F5F50D",
  dashboard_secondary_dark: "#6C46D60D",
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
      dashboard_primary_dark: COLORS.dashboard_primary_dark,
      dashboard_secondary_dark: COLORS.dashboard_secondary_dark
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
      textTransform: "uppercase",
    },
    paragraphBoldLabelLink: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      "&:hover": {
        cursor: "pointer",
      },
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
        {
          props: {
            variant: "navigation-bar-button",
            active: 1,
          },
          style: {
            color: COLORS.text_primary_dark,
            background: COLORS.text_accent,
            width: '100%',
            borderRadius: 8,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            whiteSpace: "noWrap",
            textTransform: "none",

            "&:hover": {
              background: COLORS.text_accent,
            },
          },
        },
        {
          props: {
            variant: "navigation-bar-button",
            active: 0,
          },
          style: {
            color: COLORS.dashboard_primary_light,
            background: "none",
            width: '100%',
            borderRadius: 8,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            whiteSpace: "noWrap",
            textTransform: "none",

            "&:hover": {
              background: "none",
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
    MuiGrid: {
      variants: [
        {
          props: { variant: "dashboard-component-container" },
          style: {
            background: COLORS.background_dark,
            alignItems: "center",
            minWidth: 350, //theme.breakpoints["min"]
            maxWidth: 1000, //theme.breakpoints["header"]
          },
        },
        {
          props: { variant: "navigation-bar-container" },
          style: {
            background: COLORS.dashboard_primary_dark,
            alignItems: "center",
            borderRadius: 16,
          },
        },
        {
          props: { variant: "panel-component-container" },
          style: {
            paddingTop: 32,
          },
        },
        {
          props: { variant: "panel-grid-item" },
          style: {
            height: "100%",
          },
        },
        {
          props: { variant: "tile-inner-container" },
          style: {
            background: COLORS.dashboard_secondary_dark,
            padding: 40,
            // '@media (max-width:700px)': {
            //   padding: 20,
            // },
            // '@media (max-width:600px)': {
            //   padding: 10,
            // },
          },
        },
        {
          props: { variant: "header-container" },
          style: {
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        {
          props: { variant: "filter-container" },
          style: {
            justifyContent: "flex-end",
            textTransform: 'uppercase',
            textWrap: 'noWrap',
            alignItems: "center",
            direction: "column",

            [`& .${outlinedInputClasses.notchedOutline}`]: {
              border: "none",
            },
            [`& .${selectClasses.outlined}`]: {
              color: COLORS.text_primary,
              background: "none",
              padding: 0,
            },
            [`& .${selectClasses.iconOutlined}`]: {
              stroke: COLORS.text_primary,
              fill: "none",
            },
          },
        },
        {
          props: { variant: "chart-container" },
          style: {
            marginTop: 96,
            height: "30vh",
            [`& .recharts-rectangle:hover`]: {
              fill: COLORS.text_accent,
            },
            [`& .recharts-tooltip-wrapper`]: {
              color: COLORS.text_primary,
              background: COLORS.dashboard_primary_dark,
              borderRadius: 16,
              padding: 16,
            },
            [`& .recharts-text.recharts-cartesian-axis-tick-value`]: {
              fill: COLORS.text_primary,
            },
          },
        },
      ]
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          padding: 0,
          margin: 0,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          PaperProps: {
            elevation: 0,
            style: {
              background: "none",
            },
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        style: {
          color: COLORS.text_primary,
          alignItems: "center",
          background: "none",
          padding: 0,
          margin: 0,
        }
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "paragraphBoldLabelLink",
            active: 1
          },
          style: {
            color: COLORS.text_accent,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
        {
          props: {
            variant: "paragraphBoldLabelLink",
            active: 0
          },
          style: {
            color: COLORS.text_primary_dark,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
      ]
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      min: 350,
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
