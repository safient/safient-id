import React from 'react';

import Footer from '../Layouts/Footer';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='container'>{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
