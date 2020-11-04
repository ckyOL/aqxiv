import React from 'react';
// import { Link } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

library.add(fas);
const IndexPage = () => (
  <Layout>
    <>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <Header />
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
