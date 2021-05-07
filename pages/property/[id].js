import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Property({property}) {

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div id="Property">
                <Container fluid className="p-0">
                    <Row className="bg-primary justify-content-center">
                        <Col className="my-5 text-center">
                            <h1>
                                Placeholder till api is connected. Shows that properties id is retrieved.
                            </h1>
                            <p>
                                Id : {property ? property : "Failed to load property"}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {

    console.log(params)
    var property = null;

    try{

        const id = await params.id;
        console.log(id)
        property = id;

        /*const response = await fetch('../Property.json' ,{headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
        const propertyListing = await response.json();
        console.log(propertyListing)*/

        console.log(property)
        return { props: { property } }
    }catch (error) {
        console.log(error)
        return { props: { property } }
    }

}

export default Property;