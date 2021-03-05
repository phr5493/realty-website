import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Testimonials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Testimonials</h1>
    </Layout>
  )
}
