import Head from "next/head";
import {Container, Grid} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import Footer from "../Footer";
import theme from '../theme'
import themeDashboard from "./Theme"

export default function Layout(props) {

  return (
    <ThemeProvider theme={theme}>
    <Grid
      container
      direction="column"
      // justifyContent="space-between"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        background:
          props.colorMode == "dark"
            ? theme.palette.background.dark
            : theme.palette.background.light,
        color:
          props.colorMode == "dark"
            ? theme.palette.text.primary_dark
            : theme.palette.text.primary_light,
      }}
    >
      <Grid item>
        <Container maxWidth="md" disableGutters>
          <Header colorMode={props.colorMode} />
        </Container>
      </Grid>

      <Grid item sx={{ marginBottom: 0, paddingBottom: 0 }}>
        <Container
          maxWidth="md"
          disableGutters
          sx={{ marginBottom: 0, paddingBottom: 0 }}
        >
          <Grid
            item
            maxWidth="md"
            sx={{
              flexDirection: "column",
              paddingLeft: { md: "10px" },
              paddingRight: { md: "10px" },
              marginBottom: 0,
              paddingBottom: 0,
              width: "100vw",
            }}
          >
          <ThemeProvider theme={themeDashboard}>
            {props.children}
          </ThemeProvider>
          </Grid>
        </Container>
      </Grid>

      <Grid
        item
        sx={{
          background: theme.palette.background.dark,
          color: theme.palette.text.primary_dark,
          marginTop: 0,
          bottom: 0,
        }}
      >
        <Footer colorMode={props.colorMode} setColorMode={props.setColorMode} />
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

// <CacheProvider value={emotionCache}>
//   <ThemeProvider theme={theme}>
//   </ThemeProvider>
// </CacheProvider>
