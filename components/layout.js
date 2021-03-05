import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Banner from '../components/layout/banner';
import TopBar from '../components/layout/topBar';
import BottomBar from '../components/layout/bottomBar';
import Footer from '../components/layout/footer';

export const siteTitle = 'Next.js Realty Site'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta
                name="description"
                content="A website built for advertising and pomiting properties for a realtor using Next.js"
                />
                <meta property="og:title" content={siteTitle}/>
                <meta property="og:description" content="A website built for advertising and pomiting properties for a realtor using Next.js"/>
                <meta property="og:image" content="/images/background-slide-1.jpg"/>
                <meta property="og:url" content="https://realty-website-10dd2.web.app/"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </Head>
            <Container fluid className="p-0">
                <Banner />
                <TopBar />
                <main>{children}</main>
                <BottomBar />
                <Footer />
            </Container>
        </div>
    )
}