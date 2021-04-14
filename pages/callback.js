import { useState, useEffect } from 'react';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import Router, { useRouter } from 'next/router';
// import Layout from '../components/Layout';
//import Loader from '../components/modals/Loader';
import {ethers} from "ethers";
//import {checkEmailExists, generateCipherKey, loginUserWithChallenge, registerNewUser} from "../lib/threadDb";
//import {definitions} from "../utils/config.json";

const Callback = (props) => {
  const [magic, setMagic] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showValidatingToken, setShowValidatingToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    !magic &&
      setMagic(
        new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
          extensions: [new OAuthExtension()],
        })
      );
      // if(magic){
      //   let web3Provider = new ethers.providers.Web3Provider(magic.rpcProvider)
      //   props.handleMagicLinkWeb3(web3Provider).then(data => {
      //     console.log("Done")
      //   })
      // }
    /* if `provider` is in our query params, the user is logging in with a social provider */
    magic && router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
  }, [magic, router.query]);

  const finishSocialLogin = async () => {
    try {
      let {
        magic: { idToken },
      } = await magic.oauth.getRedirectResult();
      setShowValidatingToken(true);
      let web3Provider = new ethers.providers.Web3Provider(magic.rpcProvider)
      const {idx, identity}=await props.handleMagicLink(web3Provider)
      console.log("Done")
      await authenticateWithServer(idToken, idx, identity);
    } catch (error) {
      console.log(error);
      setErrorMsg('Error logging in. Please try again.');
    }
  };

  const finishEmailRedirectLogin = async () => {
    if (router.query.magic_credential) {
      try {
        let didToken = await magic.auth.loginWithCredential();
        setShowValidatingToken(true);
        await authenticateWithServer(didToken);
      } catch (error) {
        console.log(error);
        setErrorMsg('Error logging in. Please try again.');
      }
    }
  };

  const authenticateWithServer = async (didToken, idx, identity) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
    });
    //res.status === 200 && Router.push('/');

    if (res.status === 200){
      let userMetadata = await magic.user.getMetadata();
      // console.log("threadData:",threadData)
      console.log("User:", userMetadata)
      await registerMagicLinkUser(idx, identity, userMetadata.email)
      // if (threadData===null){
      //   await registerMagicLinkUser(idx, identity, userMetadata.email)
      // }else{
      //   console.log("User already registered!!")
      // }
    }
    props.setUserStatus(2)
    Router.push('/')
  };

  const registerMagicLinkUser = async (idx, identity, email)=>{
    if (idx) {
          await idx.set('basicProfile', {
            name: 'Yathish',
            description:
              'Curabitur vel aliquet mauris, ac varius dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum feugiat massa vel odio molestie posuere. Praesent aliquam velit dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur accumsan eros et pulvinar auctor. Nunc sapien lorem, ultricies id mauris a, bibendum accumsan sapien.',
            birthDate: '1998-05-14',
            url: email,
            homeLocation: 'Bangalore',
            residenceCountry: 'IN',            
          })
          console.log(`DID with profile: ${idx.id}`)
          } else {
            console.log("Not authenticated with server!!!")
          }
      }

  return (
    <div>
      {errorMsg ? (
        <div className='error'>{errorMsg}</div>
      ) : (
        <div className='callback-container'>
            {/* <Loader loading={true} heading="Connecting to Magic Link" content="Fetching data" /> */}
          {/* {showValidatingToken && <div className='auth-step'>Validating token...</div>} */}
        </div>
      )}

      <style jsx>{`
        .callback-container {
          width: 100%;
          text-align: center;
        }
        .auth-step {
          margin: 30px 0;
          font-size: 17px;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Callback;