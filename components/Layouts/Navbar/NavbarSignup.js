import React from 'react';
import Link from 'next/link';
import { Button, Text } from '@geist-ui/react';
import { NavBar } from './Navbar.Styles';
import { TextMedium16, TextSemi } from '../../../utils/index';

function Navbar() {
  return (
    <NavBar>
      <div className='logo'>
        <h4>Logo</h4>
      </div>
      <div className='navbar-items'>
        <TextMedium16 className='navbar-items__text'>
          {' '}
          Don't have an account?
        </TextMedium16>
        <Button size='medium' auto className='navbar-items__btn'>
          <Link href='/auth/register'>
            <a> Sign up</a>
          </Link>
        </Button>
      </div>
    </NavBar>
  );
}

export default Navbar;
