import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import React from 'react';
import SearchCarousel from '../components/home/searchCarousel';
import TestimonialCarousel from '../components/home/testimonialCarousel';
import PropertyCarousel from '../components/home/propertyCarousel';
import HomeText from '../components/home/homeText';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="Home">
          <SearchCarousel />
          <HomeText choice="About" />
          <PropertyCarousel />
          <HomeText choice="Contact" />
          <TestimonialCarousel />
      </div>
    </Layout>
  )
}