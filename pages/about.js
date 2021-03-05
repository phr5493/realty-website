import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>About</h1>
    </Layout>
  )
}
