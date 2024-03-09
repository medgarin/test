import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "../providers";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <Fragment>
      <Head>
        <title>Jose Luis Herrera Gonzalez</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href="https://fonts.googleapis.com/css2?family=:300,400,500,700&display=swap'"
          rel='stylesheet'
        />

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
