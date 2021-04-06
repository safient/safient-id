import { Button } from '@geist-ui/react';
import React, { useState } from 'react';
import Layout from '../components/Layouts/Layout';

const Home = (props) => {
  return (
    <Layout>
      <h1>Profile page</h1>
      <Button onClick={props.connect}>Connect the old way</Button>
      <Button onClick={props.getData}>Fetch Data</Button>
    </Layout>
  );
};

export default Home;
