import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import PropertyContainer from '../components/property/propertyContainer';

export default function Properties() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="Properties">
        <PropertyContainer />
      </div>
    </Layout>
  )
}
