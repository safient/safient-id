import React from 'react';

import Navbar from '../Layouts/Navbar/Navbar';
import { TextSemi, TextMedium16 } from '../../utils/typography';
import { Input, Button, Image } from '@geist-ui/react';
import { LoginContainer, HelperText, SocialLogin } from './register.style';

function Login() {
  return (
    <>
      <Navbar />
      <LoginContainer className='login__container'>
        <div className='login__form'>
          <div className='login__form-heading'>
            <TextSemi>Login</TextSemi>
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
            <Button className='login__form-signup-groups-btn'>Sign In</Button>
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
            >
              Sign in with Google
            </Button>
            <Button
              className='social__login-btn'
              icon={<Image width='25' height='25' src='/assets/github.png' />}
              placeholder='GitHub'
            >
              Sign in with Github
            </Button>
          </SocialLogin>
        </div>
      </LoginContainer>
    </>
  );
}

export default Login;
