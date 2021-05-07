import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Parallax } from 'react-parallax';

function AboutContainer() {

    return (
        <Container fluid id="AbutContainer" className="bg-primary px-0 pb-3">
            <Row noGutters className="justify-content-center">
                <Container fluid className="px-0">
                    <Parallax bgImage="/images/lake_eola.jpg" bgImageAlt="the cat" strength={200}>
                        <Col className="my-5 text-center">
                            <h1>About Me</h1>
                        </Col>
                    </Parallax>
                </Container>
            </Row>
            <Row noGutters className="justify-content-center">
                <Container fluid className="bg-primary px-5 pb-3">
                        <Col className="my-5">
                            <h3 className="text-center">
                                Hinc nostrud no vis, sensibus imperdiet his ad. 
                                Mei no autem possim perfecto, natum omnium te quo.
                            </h3>
                            <p>
                            At nam ullum tractatos, primis omnesque appellantur mei in. Autem consul expetendis sed ea, ne nostrud delicata per. Tractatos corrumpit est ad, ne forensibus complectitur nam, unum nostrud deseruisse eu qui. Mei autem impetus dissentiet id, ea postea eligendi platonem nam. Ei dolor dolorem philosophia usu, ipsum choro integre qui ut.<br>
                            </br>
                            Vim quando utamur recteque cu, sea unum conceptam comprehensam cu. Vix vitae tation detracto in, veri ipsum nihil et pri. Eam vidisse nominavi facilisis no, dolorum commune maiestatis ex pro. Ut justo convenire quo, mei erant comprehensam ad, mea primis nonumes instructior ne. Ex mazim tantas dictas has, et mutat illud posidonium vix.<br></br>
                            Ius quem scripta te, mea ne dictas consequat. Ut doming abhorreant signiferumque pri, an vis verear feugait commune. Vim suas mundi facilisis id, sea nibh deserunt te, lobortis patrioque nec eu. Qui movet maiorum conclusionemque ad. Ex populo conclusionemque qui, ea postea pericula theophrastus eum.
                            </p>
                        </Col>
                </Container>
            </Row>
        </Container>
    )
}

export default AboutContainer;