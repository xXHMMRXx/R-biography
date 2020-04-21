import React, { Fragment, useState, useEffect } from 'react';
import {
    Card,
    Image,
    Col,
    Container,
    Row,
    Nav
} from 'react-bootstrap';
const image = require('../images/dark-blur-blurred-gradient-1526.jpg');
const userImage = require('../images/yo.jpeg');

const UserCard = () => {

    const [nav, setNav] = useState({});
    const [height, setHeight] = useState({ active: true, st: '#first', ln: '#link' });

    const First = () => {

        setNav({ active: true, st: '#first', ln: '#link' });

    }

    const Link = () => {

        setNav({ active: false, st: '#first', ln: '#link' });

    }

    useEffect(() => {

        if (window.innerWidth <= 462) {

            setHeight({ height: 150 });

        } else if (window.innerWidth <= 704 && window.innerWidth > 462) {

            setHeight({ height: 210 });

        } else {

            setHeight({ height: 250 });

        }

    }, []);

    return (
        <Fragment>
            <section className="global" >
                <Card>
                    <div className="ImgOverlay">
                        <Card.ImgOverlay>
                            <Container>
                                <div className="Container">
                                    <Row>
                                        <div className="Col">
                                            <Col>
                                                <div className="CardUser">
                                                    <Image src={userImage} thumbnail />
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                            </Container>
                        </Card.ImgOverlay>
                        <Card.Title>
                            <div className="CardTitle NameUser">
                                Velasco Magallon Carlos Wbilio
                                <div className="CardText TextUser">
                                    ISC / 8S11
                                </div>
                            </div>
                        </Card.Title>
                    </div>
                    <Card.Img
                        height={`${height.height}`}
                        src={image}
                        alt="Card image cap" />
                    <Card.Body>
                        <div className="UserNavigation">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link
                                            href={nav.st}
                                            onClick={First} >Biografia</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link
                                            href={nav.ln}
                                            onClick={Link} >Pasatiempos</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            {

                                nav.active ?
                                    <Card.Body>
                                        <Card.Title>Sobre mi :D</Card.Title>
                                        <Card.Text>
                                            <span className="Justify">
                                                Soy estudiante de la carrera ingeniería en sistemas computacionales,
                                                tengo 22 años de edad y vivo en Ciudad Nezahualcoyotl.
                                            </span>
                                        </Card.Text>
                                    </Card.Body> :

                                    <Card.Body>
                                        <Card.Title>¿Qué me gusta hacer?</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Me gusta programar.</li>
                                                <li>Me gusta hacer ejercicio.</li>
                                                <li>Me gusta mucho jugar con mi mascota.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>

                            }
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </Fragment>
    );
}

export default UserCard;