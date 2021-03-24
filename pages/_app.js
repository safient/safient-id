import React, { useState } from 'react';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { generateSignature } from '../lib/signerConnect';
import { generateIDX, generateIDXForMagic } from '../lib/identity';
import { definitions } from '../utils/config.json';
import { getLoginUser, loginUserWithChallenge } from '../lib/threadDb';
import { PrivateKey } from '@textile/hub';
import { GlobalStyle } from '../utils/Global';
import Layout from '../components/Layouts/Layout';

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light');
  const [provider, setProvider] = useState(null);
  const toggleDarkMode = () =>
    setThemeType(themeType === 'dark' ? 'light' : 'dark');

  return (
    <GeistProvider theme={{ type: themeType }}>
      <GlobalStyle />
      {/* <CssBaseline /> */}

      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default MyApp;
