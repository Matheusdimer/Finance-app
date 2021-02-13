import Head from "next/head";
import { useContext } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import ThemeProvider, { ThemeContext } from "../theme/ThemeProvider";

function Root({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} {...pageProps}/>
    </ThemeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <meta name="theme-color" content={theme.primary} />
      </Head>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </>
  );
}

export default Root;
