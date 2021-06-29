import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/base/Layout";
import { theme, GlobalStyle } from "styles/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout global={global}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
