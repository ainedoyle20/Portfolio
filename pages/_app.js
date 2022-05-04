import MainHeader from '../components/main-header';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
