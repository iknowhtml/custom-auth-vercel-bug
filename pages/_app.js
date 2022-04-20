import "../styles/globals.css";
import CustomAuth from "@toruslabs/customauth";

new CustomAuth({
  baseUrl: "localhost:3000",
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
