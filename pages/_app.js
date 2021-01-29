import Head from "next/head";
import { useContext } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import ThemeProvider, { ThemeContext } from "../src/theme/ThemeProvider";

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </>
  );
}

export default Root;
