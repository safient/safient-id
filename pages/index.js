import React from 'react';

// import Navbar from '../../../components/Layouts/Navbar/NavbarSignup';
// import { TextSemi, TextMedium16 } from '../../utils/typography';
// import { Input, Button, Image } from '@geist-ui/react';
// import { LoginContainer, HelperText, SocialLogin } from '../register.style';

import Navbar from '../components/Layouts/Navbar/Navbar';
import { TextSemi, TextMedium16 } from '../utils';
import { Input, Button, Image } from '@geist-ui/react';
import {
  LoginContainer,
  HelperText,
  SocialLogin,
} from '../components/auth/register.style';
import Layout from '../components/Layouts/Layout';
import Profile from '../components/Profile/Profile';
import Register from "../components/auth/register";

function Home(props) {
  const userStatus = props.userStatus;
  return (
    <>
   {
     userStatus === 2 ? (
      <>
      <Layout>
      <Navbar />
      <Profile idx={props.idx} userAddress={props.userAddress} magicProvider={props.magicProvider}/>
    </Layout>
    </>
     ) : (
    <Layout>
        <Navbar />
      <Register connect={props.connect}/>
    </Layout>
     )
   }
   </>
  );
}

export default Home;
