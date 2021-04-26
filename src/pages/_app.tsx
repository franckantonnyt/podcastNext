import '../styles/globals.scss';
import { PLayerContextProvider } from '../contexts/PlayerContext';

import Header from './components/Header';
import Player from './components/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PLayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PLayerContextProvider>
  );
}

export default MyApp;
