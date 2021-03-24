import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import TestimonialContainer from '../components/testimonial/testimonialContainer';

export default function Testimonials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="Testimonials">
        <TestimonialContainer />
      </div>
    </Layout>
  )
}
