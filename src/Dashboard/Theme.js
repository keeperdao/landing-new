import {createTheme} from '@mui/material/styles';


export const COLORS = {

  text_light_primary: "#141118",
  text_light_secondary: "#8F8F8F",
  text_dark_primary: "#F5F5F5",
  text_dark_secondary: "#F5F5F532",
  text_dark_tertiary: "#6C46D6",

  background_light_primary: "#141118",
  background_dark_primary: "#6C46D60D",
  background_dark_secondary: "#F5F5F50D",
  background_dark_tertiary: "#6C46D6",

};

const themeDashboard = createTheme({

  palette: {

    text: {
      light_primary: COLORS.text_light_primary,
      light_secondary: COLORS.text_light_secondary,
      dark_primary: COLORS.text_dark_primary,
      dark_secondary: COLORS.text_dark_secondary,
      dark_tertiary: COLORS.text_dark_tertiary,
    },

    background: {
      light_primary: COLORS.background_light_primary,
      dark_primary: COLORS.background_dark_primary,
      dark_secondary : COLORS.background_dark_secondary,
    },

  },

  typography: {

    fontFamily: ["Inter"].join(","),

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
        background: "none",
        cursor: "pointer",
      },
    },

    paragraphRegularLarge: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
    },

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

  },

  components: {

    MuiGrid: {

      variants: [
        {
          props: {variant: "dashboard-container"},
          style: {
            alignItems: "center",
            background: COLORS.background_light_primary,
            minWidth: 350,
            maxWidth: 840,
          },
        },
        {
          props: {variant: "control-container"},
          style: {
            background: COLORS.background_dark_secondary,
            alignItems: "center",
            textAlign: "center",
            borderRadius: 16,
            padding: 8,
          },
        },
        {
          props: {variant: "panel-container"},
          style: {
            paddingTop: 32,
          },
        },
        {
          props: {variant: "tile-item"},
          style: {
            padding: 4,
          },
        },
        {
          props: {variant: "tile-inner-container"},
          style: {
            background: COLORS.background_dark_primary,
            padding: 40,
          },
        },
        {
          props: {variant: "header-container"},
          style: {
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        {
          props: {variant: "filter-container"},
          style: {
            justifyContent: "flex-end",
            textTransform: 'uppercase',
            textWrap: 'noWrap',
            alignItems: "center",
            direction: "column",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
            },

            "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
            },

            "& .MuiSelect-outlined": {
              color: COLORS.text_dark_primary,
              background: "none",
              border: "none",
              padding: 0,
            },

            "& .MuiSelect-iconOutlined" : {
              color: COLORS.text_dark_primary,
              border: "none",
            },
          },
        },
        {
          props: {variant: "chart-container"},
          style: {
            marginTop: 96,
            height: "50vh",
          },
        },
      ]
    },

    MuiButtonBase: {

      defaultProps: {
        disableRipple: true,
      },

    },

    MuiButton: {

      defaultProps : {
        style: {
          width: '95%',
          borderRadius: 8,
          padding: 8,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "19px",
          whiteSpace: "noWrap",
          textTransform: "none",
        }
      },
      variants: [
        {
          props: {variant: "control-active"},
          style: {
            color: COLORS.text_dark_primary,
            background: COLORS.background_dark_tertiary,
            "&:hover" : {
                background: COLORS.background_dark_tertiary,
            },
          },
        },
        {
          props: {variant: "control-inactive"},
          style: {
            color: COLORS.text_dark_secondary,
            background: "none",
            "&:hover" : {
                background: "none",
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
          alignItems: "center",
          background: "none",
          padding: 0,
          margin: 0,
        }
      },

    },

  },

  breakpoints: {
    values: {
      xs: 0,
      min: 350,
      sm: 600,
      max: 840,
    },
  },
});

export default themeDashboard;
