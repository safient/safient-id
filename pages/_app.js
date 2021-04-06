import React, { useState, useEffect } from 'react';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { generateAuth, generateIdentity } from '../lib/signerConnect';
import Ceramic from '@ceramicnetwork/http-client'
import {IDX} from '@ceramicstudio/idx'
import ThreeIdProvider from '3id-did-provider'
// import { generateIDX, generateIDXForMagic } from '../lib/identity';
// import { definitions } from '../utils/config.json';
import { getLoginUser, loginUserWithChallenge } from '../lib/threadDb';
import { PrivateKey } from '@textile/hub';
import { GlobalStyle } from '../utils/Global';
import Layout from '../components/Layouts/Layout';
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'

const CERAMIC_URL = 'http://localhost:7007'


function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light');
  const [web3Modal, setWeb3Modal] = useState(null)
  const [idx, setIdx] = useState(null);
  const [ceramic, setCeramic] = useState(null);
  const [user, setUser] = useState(0);
  const [userData, setUserData] =useState([]);
  const [identity, setIdentity] = useState(null);

  const toggleDarkMode = () =>
  setThemeType(themeType === 'dark' ? 'light' : 'dark');


  useEffect(() => {
    async function  init() {
      if(typeof window !== 'undefined') {
        console.log("Entered")
        const web3Modal = new Web3Modal({
          network: 'mainnet',
          cacheProvider: true,
          providerOptions: {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                infuraId: 'e87f83fb85bf4aa09bdf6605ebe144b7',
              },
            },
          },
        })
        setWeb3Modal(web3Modal)
      }
    }
   init() 
  }, [])

  const connect = async () => {
    if(web3Modal !== null) {
      const ceramic = new Ceramic(CERAMIC_URL)

      const getPermission = () => Promise.resolve([])
      const {authProvider, accountId, authSecret} = await generateAuth(web3Modal);

      const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(authSecret))
      setIdentity(identity)

      const authId = accountId // a name of the auth method
      const threeId = await ThreeIdProvider.create({ getPermission, authSecret, authId, ceramic })
      console.log("Three ID", threeId);
      const provider = threeId.getDidProvider()

      await ceramic.setDIDProvider(provider)
      setCeramic(ceramic)
      const idx = new IDX({ ceramic })
      setIdx(idx)
    }
  }


  const magicLinkConnect = async (magicLinkProvider) => {
      const ceramic = new Ceramic(CERAMIC_URL)

      const getPermission = () => Promise.resolve([])
       const {authSecret, providerUsed}= await generateIdentity(magicLinkProvider);

      const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(authSecret))
      setIdentity(identity)

      const authId = "MagicLinkAuthenticationMethod" // a name of the auth method
      const threeId = await ThreeIdProvider.create({ getPermission, authSecret, authId, ceramic })
      console.log("Three ID", threeId);
      const provider = threeId.getDidProvider()

      await ceramic.setDIDProvider(provider)
      setCeramic(ceramic)
      const idx = new IDX({ ceramic })
      setIdx(idx)
      return {idx, identity}
  }


  const getData = async () => {
    const res = await idx.get("basicProfile", idx.id)
    console.log("Result", res);
    console.log("Did", idx.id)
  }

  return (
    <GeistProvider theme={{ type: themeType }}>
      <GlobalStyle />
      {/* <CssBaseline /> */}

      <Component {...pageProps} 
      connect = {connect}
      handleMagicLink = {magicLinkConnect}
      getData = {getData}
      />
    </GeistProvider>
  );
}

export default MyApp;
