import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Properties() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Properties</h1>
    </Layout>
  )
}
