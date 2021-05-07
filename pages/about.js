import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import AboutContainer from '../components/about/aboutContainer';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="About">
        <AboutContainer />
      </div>
    </Layout>
  )
}
