import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { AppProps } from "next/app";

import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />

      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
