import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Home</h1>
    </Layout>
  )
}
