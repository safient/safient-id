import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Layouts/Navbar/NavbarSignin';
import { TextSemi, TextMedium16 } from '../../utils/typography';
import { Input, Button, Image } from '@geist-ui/react';
import { LoginContainer, HelperText, SocialLogin } from './register.style';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { useUser } from '../../lib/hooks'
import { ethers } from 'ethers';

function register(props) {

  console.log("props", props)
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [magic, setMagic] = useState(null);

  useEffect(() => {
    !magic &&
      setMagic(
        new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
          extensions: [new OAuthExtension()],
        })
      );
    magic?.preload();
  }, [magic]);

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider,
      redirectURI: `${process.env.NEXT_PUBLIC_CLIENT_URL}/callback`,
    });
  }

    // try to login with webauthn, if that fails, revert to registering with webauthn
    async function authenticateWithServer(didToken) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}/api/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + didToken,
          },
        }
      );
      res.status === 200 && Router.push('/');
    }

  return (
    <>
      <Navbar />
      <LoginContainer className='login__container'>
        <div className='login__form'>
          <div className='login__form-heading'>
            <TextSemi>Create an Account</TextSemi>
          </div>
          {/* <div className='login__form-fields'> */}
          <div className='login__form-input-group'>
            <TextMedium16 className='login__form-input-group-label'>
              Email Address
            </TextMedium16>
            <Input
              className='login__form-input-group-input'
              size='medium'
              placeholder='Johndoe@domain.com'
            />
          </div>
          <div className='login__form-input-group'>
            <TextMedium16 className='login__form-input-group-label'>
              Password
            </TextMedium16>
            <Input.Password
              className='login__form-input-group-input'
              size='medium'
              placeholder='*************'
            />
          </div>
          <div className='login__form-signup-groups'>
            <Button className='login__form-signup-groups-btn'>Sign up</Button>
          </div>
          {/* </div> */}
          <HelperText>
            <TextMedium16>
              By clicking, you agree to Consesolabs's Terms of Use & Privacy
              Policy.
            </TextMedium16>
          </HelperText>
          <SocialLogin className='social__login'>
            <TextMedium16 className='social__login-helperText'>OR</TextMedium16>
            <Button
              className='social__login-btn'
              icon={<Image width='25' height='25' src='/assets/google.png' />}
              placeholder='GitHub'
              onClick={() => {
                handleLoginWithSocial('google');
              }}
            >
              Signup with Google
            </Button>
            <Button
              className='social__login-btn'
              icon={<Image width='25' height='25' src='/assets/github.png' />}
              placeholder='GitHub'
              onClick={() => {
                handleLoginWithSocial('github');
              }}
            >
              Signup with Github
            </Button>
          </SocialLogin>
        </div>
      </LoginContainer>
    </>
  );
}

export default register;
